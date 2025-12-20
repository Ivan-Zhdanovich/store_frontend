Ext.define('storeApp.view.main.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'app-main',
    controller: 'main',
    viewModel: 'main',

    navigationBar: {
        title: 'Каталог Motexc',
        items: [{
            xtype: 'button',
            text: 'Добавить',
            align: 'right',
            handler: 'onAddPart'
        }]
    },

    items: [{
        xtype: 'panel',
        layout: 'hbox',
        items: [
            {
                xtype: 'treelist',
                reference: 'categoryTree',
                width: 250,
                collapsed: false,
                collapsible: true,
                bind: '{categoryStore}',
                listeners: { selectionchange: 'onCategorySelect' }
            },
            {
                xtype: 'container',
                flex: 1,
                layout: 'fit',
                items: [
                    {
                        xtype: 'toolbar',
                        docked: 'top',
                        items: [
                            {
                                xtype: 'searchfield',
                                placeholder: 'Поиск (код/название)...',
                                width: 250,
                                listeners: { change: { fn: 'onSearchChange', buffer: 400 } }
                            },
                            { xtype: 'button', text: 'Новинки', enableToggle: true, toggleHandler: 'onFilterToggle', filterId: 'isNew' },
                            { xtype: 'button', text: 'Распродажа', enableToggle: true, toggleHandler: 'onFilterToggle', filterId: 'isSale' },
                            { xtype: 'button', text: 'В наличии', enableToggle: true, toggleHandler: 'onFilterToggle', filterId: 'inStock' },
                            {
                                xtype: 'selectfield',
                                placeholder: 'Поставщики',
                                multiSelect: true,
                                bind: { store: '{suppliersStore}' },
                                valueField: 'id',
                                displayField: 'name',
                                listeners: { change: 'onSupplierChange' }
                            }
                        ]
                    },
                    { xtype: 'parts-grid' }
                ]
            }
        ]
    }]
});