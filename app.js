/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'storeApp.Application',

    name: 'storeApp',

    requires: [
        // This will automatically load all classes in the storeApp namespace
        // so that application classes do not need to require each other.
        'storeApp.*'
    ],
//     launch: function() {
//     Ext.state.Provider.register(new Ext.state.LocalStorageProvider());
// },

    // The name of the initial view to create.
    mainView: 'storeApp.view.main.Main'
});
