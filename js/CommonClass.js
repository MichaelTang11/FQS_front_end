class pageEntity {
    constructor( page_index = 0, page_size = 0, page_count = 0, total_row = 0, order_by = ''){
        self.page_index=page_index;
        self.page_size=page_size;
        self.page_count=page_count;
        self.total_row=total_row;
        self.order_by=order_by;
    }
}