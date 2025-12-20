Ext.define('storeApp.model.Part', {
    extend: 'Ext.data.Model',
    stateful: true,
    fields: [
        { name: 'id', type: 'int' },
        { name: 'code', type: 'string' },
        { name: 'name', type: 'string' },
        { name: 'price', type: 'float' },
        
        { name: 'categoryName', mapping: 'category.name' }, 
        { name: 'supplierName', mapping: 'supplier.title' }, 
        
        { name: 'inStock', type: 'boolean', mapping: 'in_stock' },
        { name: 'isNew', type: 'boolean', mapping: 'is_new' },
        { name: 'isSale', type: 'boolean', mapping: 'is_sale' }
    ],
    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/api/parts'
    }
});