Ext.define("storeApp.data.proxy.CategoryProxy", {
  extend: "Ext.data.proxy.Rest",
  alias: "proxy.categoryproxy",

  buildUrl: function (request) {
    var me = this,
      url = me.callParent([request]),
      id = request.getParams() ? request.getParams()[me.getIdParam()] : null;

    if (id && !url.match(/\/children$/)) {
      url += "/children";
    }

    return url;
  },
});
