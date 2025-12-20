Ext.define('storeApp.data.proxy.NestProxy', {
    extend: 'Ext.data.proxy.Rest',
    alias: 'proxy.nestproxy',
    sortParam: 'sort',
    pageParam: 'page',
    limitParam: 'limit',

    encodeSorters: function(sorters) {
        if (!sorters || !sorters.length) {
            return null;
        }
        const sorter = sorters[0];
        return (sorter.getDirection() === 'DESC' ? '-' : '+') + sorter.getProperty();
    }
});