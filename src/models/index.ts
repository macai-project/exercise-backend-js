export interface Payload {
  product: {
    id: string;
    expiring_date?: string;
    product_expiration_type: "date" | "fresh" | "none";
    shelf_id: string;
    shelf_name: string;
    shelf_life?: number;
    warehouse_id: string;
  };
}
