export interface LineItemModel{
    id: string;
    name: string;
    quantity: number;
    itemCategory: string;
    description?: string;
    unitPrice: number;
    totalPrice: number;
    warranty?: string;
}
