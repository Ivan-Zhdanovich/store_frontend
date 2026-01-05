Ext.define("storeApp.view.parts.PartsGrid", {
  extend: "Ext.grid.Grid",
  xtype: "parts-grid",
  bind: "{partsStore}",
  selectable: { columns: false, rows: true },

  plugins: {
    gridpagingtoolbar: true,
  },

  columns: [
    { text: "Код", dataIndex: "code", width: 100, sortable: true },
    { text: "Название", dataIndex: "name", flex: 1, sortable: true },
    { text: "Категория", dataIndex: "categoryName", width: 150 },
    { text: "Поставщик", dataIndex: "supplierName", width: 150 },
    {
      text: "Цена",
      dataIndex: "price",
      width: 100,
      formatter: 'number("0.00")',
    },
    {
      text: "Статус",
      width: 120,
      cell: { encodeHtml: false },
      renderer: function (value, record) {
        let html = "";
        if (record.get("isNew"))
          html += '<span style="color:green; font-weight:bold">NEW </span>';
        if (record.get("isSale"))
          html += '<span style="color:red; font-weight:bold">SALE</span>';
        return html;
      },
    },
  ],
});
