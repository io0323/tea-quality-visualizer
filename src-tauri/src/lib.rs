use serde::{Deserialize, Serialize};
use std::path::PathBuf;

mod tea_analyzer {
    use super::*;

    #[derive(Debug, Serialize, Deserialize, Clone)]
    pub struct TeaLot {
        pub id: String,
        #[serde(rename = "type")]
        pub type_: String,
        pub moisture: f32,
        pub color: u8,
        pub aroma: u8,
        pub date: String,
    }

    #[tauri::command]
    pub fn analyze_tea_csv(path: String) -> Result<Vec<TeaLot>, String> {
        use csv::Reader;
        use std::fs::File;
        use std::io::BufReader;

        // パスを補正: まず指定パス、なければ src-tauri/ も試す
        let mut file_path = PathBuf::from(&path);
        if !file_path.exists() {
            let try_path = PathBuf::from("src-tauri").join(&path);
            if try_path.exists() {
                file_path = try_path;
            } else {
                return Err(format!(
                    "ファイルが見つかりません: {} または src-tauri/{}",
                    path, path
                ));
            }
        }

        let file =
            File::open(&file_path).map_err(|e| format!("ファイルを開けませんでした: {}", e))?;
        let reader = BufReader::new(file);
        let mut csv_reader = Reader::from_reader(reader);

        let mut lots = Vec::new();
        for result in csv_reader.deserialize() {
            let lot: TeaLot = result.map_err(|e| format!("CSVの解析エラー: {}", e))?;
            lots.push(lot);
        }

        Ok(lots)
    }
}

pub use tea_analyzer::{analyze_tea_csv, TeaLot};

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![analyze_tea_csv])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
