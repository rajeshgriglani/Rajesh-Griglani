export interface BookRetailerItem {
  id: string;
  name: string;
  badge?: string;
  url: string;
  enabled: boolean;
  colorTheme?: string;
  description: string;
  iconName?: string;
  priority?: number;
}

export interface BookLinksConfig {
  amazon: BookRetailerItem;
  notionPress: BookRetailerItem;
  flipkart: BookRetailerItem;
  hugendubel?: BookRetailerItem;
  otherRetailers: BookRetailerItem[];
}
