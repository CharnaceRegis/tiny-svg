import { type Dictionary, t } from "intlayer";

const optimizeContent = {
  key: "optimize",
  content: {
    title: t({
      en: "Optimize SVG",
      zh: "优化 SVG",
      ko: "SVG 최적화",
      de: "SVG optimieren",
    }),
    header: {
      title: t({
        en: "Optimize SVG",
        zh: "优化 SVG",
        ko: "SVG 최적화",
        de: "SVG optimieren",
      }),
      copy: t({
        en: "Copy",
        zh: "复制",
        ko: "복사",
        de: "Kopieren",
      }),
      download: t({
        en: "Download",
        zh: "下载",
        ko: "다운로드",
        de: "Herunterladen",
      }),
      reupload: t({
        en: "Reupload",
        zh: "重新上传",
        ko: "다시 업로드",
        de: "Erneut hochladen",
      }),
      history: t({
        en: "History",
        zh: "历史记录",
        ko: "기록",
        de: "Verlauf",
      }),
    },
    history: {
      title: t({
        en: "History",
        zh: "历史记录",
        ko: "기록",
        de: "Verlauf",
      }),
      empty: t({
        en: "No saved SVGs yet",
        zh: "还没有保存的 SVG",
        ko: "저장된 SVG가 없습니다",
        de: "Noch keine gespeicherten SVGs",
      }),
      clearAll: t({
        en: "Clear All",
        zh: "清除全部",
        ko: "모두 지우기",
        de: "Alle löschen",
      }),
      close: t({
        en: "Close",
        zh: "关闭",
        ko: "닫기",
        de: "Schließen",
      }),
      delete: t({
        en: "Delete",
        zh: "删除",
        ko: "삭제",
        de: "Löschen",
      }),
      loadEntry: t({
        en: "Load SVG",
        zh: "加载 SVG",
        ko: "SVG 로드",
        de: "SVG laden",
      }),
    },
    buttons: {
      copy: t({
        en: "Copy",
        zh: "复制",
        ko: "복사",
        de: "Kopieren",
      }),
      download: t({
        en: "Download",
        zh: "下载",
        ko: "다운로드",
        de: "Herunterladen",
      }),
    },
    tabs: {
      original: t({
        en: "Original",
        zh: "原始",
        ko: "원본",
        de: "Original",
      }),
      optimized: t({
        en: "Optimized",
        zh: "已优化",
        ko: "최적화됨",
        de: "Optimiert",
      }),
      code: t({
        en: "Code",
        zh: "代码",
        ko: "코드",
        de: "Code",
      }),
    },
    settings: {
      title: t({
        en: "Settings",
        zh: "设置",
        ko: "설정",
        de: "Einstellungen",
      }),
      global: {
        title: t({
          en: "Global Settings",
          zh: "全局设置",
          ko: "グローバル설정",
          de: "Globale Einstellungen",
        }),
        showOriginal: t({
          en: "Show original",
          zh: "显示原始",
          ko: "원본を表示",
          de: "Original anzeigen",
        }),
        compareGzipped: t({
          en: "Compare gzipped",
          zh: "比较压缩后",
          ko: "Gzip 압축 비교",
          de: "Gzip-Komprimierung vergleichen",
        }),
        prettifyMarkup: t({
          en: "Prettify markup",
          zh: "美化标记",
          ko: "마크업 정리",
          de: "Markup verschönern",
        }),
        multipass: t({
          en: "Multipass",
          zh: "多次优化",
          ko: "다중 패스",
          de: "Mehrfachdurchlauf",
        }),
        numberPrecision: t({
          en: "Number precision",
          zh: "数字精度",
          ko: "숫자 정밀도",
          de: "Zahlenpräzision",
        }),
        transformPrecision: t({
          en: "Transform precision",
          zh: "变换精度",
          ko: "변환 정밀도",
          de: "Transformationspräzision",
        }),
      },
      features: {
        title: t({
          en: "Features",
          zh: "功能",
          ko: "기능",
          de: "Funktionen",
        }),
        resetAll: t({
          en: "Reset all",
          zh: "重置全部",
          ko: "모두 재설정",
          de: "Alle zurücksetzen",
        }),
      },
      export: {
        title: t({
          en: "Export",
          zh: "导出",
          ko: "내보내기",
          de: "Exportieren",
        }),
        png: t({
          en: "Export as PNG",
          zh: "导出为 PNG",
          ko: "PNG로 내보내기",
          de: "Als PNG exportieren",
        }),
        jpeg: t({
          en: "Export as JPEG",
          zh: "导出为 JPEG",
          ko: "JPEG로 내보내기",
          de: "Als JPEG exportieren",
        }),
        webp: t({
          en: "Export as WebP",
          zh: "导出为 WebP",
          ko: "WebP로 내보내기",
          de: "Als WebP exportieren",
        }),
        ico: t({
          en: "Export as ICO",
          zh: "导出为 ICO",
          ko: "ICO로 내보내기",
          de: "Als ICO exportieren",
        }),
        pdf: t({
          en: "Export as PDF",
          zh: "导出为 PDF",
          ko: "PDF로 내보내기",
          de: "Als PDF exportieren",
        }),
        scale: t({
          en: "Scale",
          zh: "比例",
          ko: "비율",
          de: "Maßstab",
        }),
        width: t({
          en: "Width",
          zh: "宽度",
          ko: "너비",
          de: "Breite",
        }),
        height: t({
          en: "Height",
          zh: "高度",
          ko: "높이",
          de: "Höhe",
        }),
      },
    },
    messages: {
      uploadSuccess: t({
        en: "SVG file uploaded successfully!",
        zh: "SVG 文件上传成功！",
        ko: "SVG 파일이 성공적으로 업로드되었습니다!",
        de: "SVG-Datei erfolgreich hochgeladen!",
      }),
      copySuccess: t({
        en: "Copied to clipboard!",
        zh: "已复制到剪贴板！",
        ko: "クリップボードに복사しました！",
        de: "In die Zwischenablage kopiert!",
      }),
      copyError: t({
        en: "Failed to copy to clipboard",
        zh: "复制到剪贴板失败",
        ko: "クリップボードへの복사に失敗しました",
        de: "Kopieren in die Zwischenablage fehlgeschlagen",
      }),
      downloadSuccess: t({
        en: "Downloaded successfully!",
        zh: "下载成功！",
        ko: "다운로드が完了しました！",
        de: "Erfolgreich heruntergeladen!",
      }),
      downloadError: t({
        en: "Failed to download file",
        zh: "下载文件失败",
        ko: "ファイルの다운로드に失敗しました",
        de: "Datei-Download fehlgeschlagen",
      }),
      exportPngSuccess: t({
        en: "Exported as PNG!",
        zh: "已导出为 PNG！",
        ko: "PNG로 내보내기 완료！",
        de: "Als PNG exportiert!",
      }),
      exportJpegSuccess: t({
        en: "Exported as JPEG!",
        zh: "已导出为 JPEG！",
        ko: "JPEG로 내보내기 완료！",
        de: "Als JPEG exportiert!",
      }),
      exportWebpSuccess: t({
        en: "Exported as WebP!",
        zh: "已导出为 WebP！",
        ko: "WebP로 내보내기 완료！",
        de: "Als WebP exportiert!",
      }),
      exportIcoSuccess: t({
        en: "Exported as ICO!",
        zh: "已导出为 ICO！",
        ko: "ICO로 내보내기 완료！",
        de: "Als ICO exportiert!",
      }),
      exportPdfSuccess: t({
        en: "Exported as PDF!",
        zh: "已导出为 PDF！",
        ko: "PDF로 내보내기 완료！",
        de: "Als PDF exportiert!",
      }),
      exportError: t({
        en: "Failed to export",
        zh: "导出失败",
        ko: "내보내기 실패",
        de: "Export fehlgeschlagen",
      }),
      noSvgToExport: t({
        en: "No optimized SVG to export",
        zh: "没有优化的 SVG 可导出",
        ko: "내보낼 최적화된 SVG가 없습니다",
        de: "Keine optimierte SVG zum Exportieren",
      }),
      invalidSvgFile: t({
        en: "Invalid file. Please select a valid SVG file (.svg).",
        zh: "无效的文件。请选择有效的 SVG 文件 (.svg)。",
        ko: "유효하지 않은 파일입니다. 유효한 SVG 파일(.svg)을 선택해주세요.",
        de: "Ungültige Datei. Bitte wählen Sie eine gültige SVG-Datei (.svg).",
      }),
      fileReadError: t({
        en: "Failed to read file. Please try again.",
        zh: "读取文件失败。请重试。",
        ko: "파일을 읽는 데 실패했습니다. 다시 시도해주세요.",
        de: "Datei konnte nicht gelesen werden. Bitte versuchen Sie es erneut.",
      }),
      invalidSvgStructure: t({
        en: "The file does not contain valid SVG content.",
        zh: "该文件不包含有效的 SVG 内容。",
        ko: "파일에 유효한 SVG 내용이 없습니다.",
        de: "Die Datei enthält keinen gültigen SVG-Inhalt.",
      }),
    },
    ui: {
      settings: t({
        en: "Settings",
        zh: "设置",
        ko: "설정",
        de: "Einstellungen",
      }),
      originalTab: t({
        en: "Original",
        zh: "原始",
        ko: "원본",
        de: "Original",
      }),
      optimizedTab: t({
        en: "Optimized",
        zh: "已优化",
        ko: "최적화됨",
        de: "Optimiert",
      }),
      codeTab: t({
        en: "Code",
        zh: "代码",
        ko: "코드",
        de: "Code",
      }),
      dataUriTab: t({
        en: "Data URI",
        zh: "Data URI",
        ko: "Data URI",
        de: "Data URI",
      }),
      clickToCompress: t({
        en: 'Click "Compress SVG" to optimize',
        zh: '点击"压缩 SVG"进行优化',
        ko: '"SVG 압축"을 클릭하여 최적화하세요',
        de: 'Klicken Sie auf "SVG komprimieren" zum Optimieren',
      }),
      noOptimizedCode: t({
        en: "No optimized code yet",
        zh: "暂无优化代码",
        ko: "아직 최적화된 코드가 없습니다",
        de: "Noch kein optimierter Code",
      }),
    },
  },
} satisfies Dictionary;

export default optimizeContent;
