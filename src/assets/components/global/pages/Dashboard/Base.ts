 export interface Mission {
  id:    number;
  label: string;
  done:  boolean;
  xp:    number;
}
 
export interface WeightEntry {
  kg:    number;
  label: string;
}
 
 export interface RadarAttr {
  label: string;
  value: number; 
}