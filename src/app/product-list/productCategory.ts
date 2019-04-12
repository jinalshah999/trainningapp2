export class ProductCategoryJoin {
  public constructor(
    public pro_id:number,
    public pro_name:string,
    public pro_price:number,
    public pro_soh:number,
    public fk_cat_id:number,
    public cat_id:number,
    public cat_name:string
  ) {}
}
