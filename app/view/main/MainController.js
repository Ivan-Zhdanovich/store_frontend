/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define("storeApp.view.main.MainController", {
  extend: "Ext.app.ViewController",

  alias: "controller.main",

  onCategorySelect: function (tree, node) {
    if (node) {
      const partsStore = this.getViewModel().getStore("partsStore");
      partsStore.getProxy().setExtraParam("categoryId", node.getId());
      partsStore.load();
    }
  },

  onSearchChange: function (field, newValue) {
    const store = this.getViewModel().getStore("partsStore");
    if (newValue.length >= 2) {
      store.getProxy().setExtraParam("query", newValue);
      store.load();
    } else if (newValue.length === 0) {
      store.getProxy().setExtraParam("query", null);
      store.load();
    }
  },

  onSavePart: function (formPanel) {
    const record = formPanel.getRecord();
    record.save({
      success: function () {
        Ext.toast("Данные сохранены");
      },
    });
  },

  onDeletePart: function (grid, info) {
    const record = info.record;
    Ext.Msg.confirm("Удаление", "Вы уверены?", function (choice) {
      if (choice === "yes") {
        record.erase();
      }
    });
  },

  onFilterToggle: function (btn, pressed) {
    const store = this.getViewModel().getStore("partsStore");
    const property = btn.filterId;
    if (pressed) {
      store.addFilter({
        id: property,
        property: property,
        value: true,
      });
    } else {
      store.removeFilter(property);
    }
  },

  onItemSelected: function (sender, record) {
    Ext.Msg.confirm("Confirm", "Are you sure?", "onConfirm", this);
  },

  onConfirm: function (choice) {
    if (choice === "yes") {
      //
    }
  },
});
