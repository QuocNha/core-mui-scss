declare module '@mui/material/styles' {
  interface Palette {
    customColors: {
      main: string;
      tableHeaderBg: string;
      primaryGradient: string;
      summaryBg: string;
      summaryTitleColor: string;
      colorCyan: string;
      tableBorder: string;
      tableText: string;
      boxShadow: string;
    };
  }
  interface PaletteOptions {
    customColors?: {
      main?: string;
      tableHeaderBg?: string;
      primaryGradient?: string;
      colorCyan?: string;
      tableBorder?: string;
    };
  }
}

export {};