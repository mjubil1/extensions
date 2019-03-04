import { init, locations } from "contentful-ui-extensions-sdk"

import "./index.css"

init(function(api) {
  console.log("alex")

  // console.log(
  //   "test",
  //   api.location(),
  //   api.location.is(locations.LOCATION_ENTRY_FIELD)
  // )

  if (api.location.is(locations.LOCATION_ENTRY_FIELD)) {
    console.log("field")
  }
  if (api.location.is(locations.LOCATION_DIALOG)) {
    console.log("dialog")
  }
  if (api.location.is(locations.LOCATION_ENTRY_SIDEBAR)) {
    console.log("sidebar")
  }
  if (api.location.is(locations.LOCATION_ENTRY_FIELD_SIDEBAR)) {
    console.log("field sidebar")
  }

  var assetsListsContainer = document.getElementById("selection")
  var assetsList = document.getElementById("importedAssets")

  renderIds(api.field.getValue())

  var isOpen = false

  document.addEventListener("BynderAddMedia", function(e) {
    isOpen = false
    var assetIds = e.detail.map(function(asset) {
      return asset.id
    })
    renderIds(assetIds)
    api.field.setValue(assetIds)
    api.window.updateHeight()
  })

  document
    .getElementById("bynder-compactview")
    .addEventListener("click", function() {
      // if (!isOpen) {
      //   isOpen = true
      //   api.window.updateHeight(500)
      // }
    })

  function renderIds(ids) {
    if (!Array.isArray(ids) || ids.length < 1) {
      assetsListsContainer.style.display = "none"
      api.window.updateHeight()
      return
    }
    assetsList.innerHTML = '<ul style="clear:both">'
    ids.map(function(item) {
      assetsList.innerHTML += "<li>" + item + "</li>"
    })
    assetsList.innerHTML += "</ul>"
    assetsListsContainer.style.display = "block"
    api.window.updateHeight()
  }
})
