/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('storeApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    requires: [
        'storeApp.data.proxy.CategoryProxy',
        'storeApp.data.proxy.NestProxy'
    ],

    alias: 'viewmodel.main',   

    data: {
        mainTitle: 'Каталог Motexc'
    },

    stores: {
        categoryStore: {
         type: 'tree',
    proxy: {
        type: 'categoryproxy',
        url: 'http://localhost:3000/api/categories',
        appendId: true,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    root: {
        text: 'Все категории',
          id: null,      
          expanded: true,
          loaded: true  
    }
        },

        suppliersStore: {
            type: 'store',
            autoLoad: true,
            proxy: {
                type: 'rest',
                url: 'http://localhost:3000/api/suppliers',
                reader: { type: 'json' }
            }
        },

        partsStore: {
            model: 'storeApp.model.Part',
            pageSize: 25,
            autoLoad: true,
            // remoteSort: true,
            remoteFilter: true,
            proxy: {
                type: 'nestproxy',
                url: 'http://localhost:3000/api/parts',
                reader: {
                     type: 'json',
                     rootProperty: 'items',        
                    totalProperty: 'meta.totalItems'
                },
                // sortParam: 'sort',
                //     encodeSorters: function(sorters) {
                //     var sorter = sorters[0];
                //     return (sorter.getDirection() === 'DESC' ? '-' : '+') + sorter.getProperty();
                // }
            }
        }
    }
});
