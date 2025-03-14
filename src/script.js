// *****Navber Logic
$(document).ready(function () {
  // Toggle "All Categories" menu
  $("#category-btn").click(function () {
    $("#category-menu").toggleClass(
      "opacity-0 translate-x-[-5px] translate-x-0"
    );
  });

  // Toggle submenus
  $(".has-submenu > button").click(function (e) {
    e.preventDefault();
    $(this).siblings(".submenu").slideToggle();
  });

  // Toggle mobile menu
  $(".menu-toggle-btn").click(function () {
    $("#mobile-menu").toggleClass("hidden translate-x-[-5px] translate-x-0");
  });
});

// *****Product Filter Logic
$(document).ready(function () {
  const minPriceInput = $("#minPrice");
  const maxPriceInput = $("#maxPrice");
  const minRange = $("#minRange");
  const maxRange = $("#maxRange");
  const progress = $(".progress");
  const selectedRange = $("#selectedRange");
  const resetButton = $("#resetButton");
  const applyButton = $("#applyButton");
  const onlineExclusiveCheckbox = $("#onlineExclusive");
  const inStockCheckbox = $("#inStock");
  const outOfStockCheckbox = $("#outOfStock");
  const availabilityButton = $("#availability-btn");
  const availabilityMenu = $("#availability-menu");
  const arrowIcon = $("#arrow-icon");
  const filterOpen = $("#filterOpen");
  const filterClose = $("#filterClose");
  const filterSection = $("#filterSection");

  // Default values
  const defaultMin = 0;
  const defaultMax = 1000;

  // Set initial values
  let minVal = parseInt(minRange.val());
  let maxVal = parseInt(maxRange.val());

  // Update progress bar
  function updateProgress() {
    const minPercent = (minVal / 1000) * 100;
    const maxPercent = (maxVal / 1000) * 100;
    progress.css("left", `${minPercent}%`);
    progress.css("width", `${maxPercent - minPercent}%`);
  }

  // Update inputs and display
  function updateValues() {
    minPriceInput.val(minVal);
    maxPriceInput.val(maxVal);
    selectedRange.text(`$${minVal} - $${maxVal}`);
    updateProgress();
  }

  // Update when range sliders change
  minRange.on("input", function () {
    minVal = parseInt(minRange.val());
    if (minVal > maxVal) {
      minRange.val(maxVal);
      minVal = maxVal;
    }
    updateValues();
  });

  maxRange.on("input", function () {
    maxVal = parseInt(maxRange.val());
    if (maxVal < minVal) {
      maxRange.val(minVal);
      maxVal = minVal;
    }
    updateValues();
  });

  // Update when input fields change
  minPriceInput.on("input", function () {
    minVal = parseInt(minPriceInput.val());
    if (minVal > maxVal) {
      minPriceInput.val(maxVal);
      minVal = maxVal;
    }
    minRange.val(minVal);
    updateValues();
  });

  maxPriceInput.on("input", function () {
    maxVal = parseInt(maxPriceInput.val());
    if (maxVal < minVal) {
      maxPriceInput.val(minVal);
      maxVal = minVal;
    }
    maxRange.val(maxVal);
    updateValues();
  });

  // Reset to default values
  resetButton.on("click", function () {
    minVal = defaultMin;
    maxVal = defaultMax;
    minRange.val(minVal);
    maxRange.val(maxVal);
    updateValues();
  });

  // Apply button action
  applyButton.on("click", function () {
    const onlineExclusive = onlineExclusiveCheckbox.is(":checked");
    const inStock = inStockCheckbox.is(":checked");
    const outOfStock = outOfStockCheckbox.is(":checked");
    alert(
      `Applied Price Range: $${minVal} - $${maxVal}\nOnline Exclusive: ${onlineExclusive} \nIn Stock: ${inStock}\nOut of Stock: ${outOfStock}`
    );
    // You can replace the alert with your custom logic (e.g., filtering products)
  });

  // Toggle Collapse Dropdown
  availabilityButton.on("click", function () {
    if (availabilityMenu.hasClass("closed")) {
      // Open the dropdown
      availabilityMenu.removeClass("closed").css("height", "auto");
      const height = availabilityMenu.height();
      availabilityMenu.css("height", 0).animate({ height: height }, 300);
      arrowIcon.addClass("custome-rotate-180");
    } else {
      // Close the dropdown
      availabilityMenu.animate({ height: 0 }, 300, function () {
        availabilityMenu.addClass("closed").css("height", "");
      });
      arrowIcon.removeClass("custome-rotate-180");
    }
  });

  // Close dropdown when clicking outside
  $(document).on("click", function (e) {
    if (!$(e.target).closest("#availability-btn, #availability-menu").length) {
      if (!availabilityMenu.hasClass("closed")) {
        availabilityMenu.animate({ height: 0 }, 300, function () {
          availabilityMenu.addClass("closed").css("height", "");
        });
        arrowIcon.removeClass("custome-rotate-180");
      }
    }
  });

  // Open filter section for sm and md devices
  filterOpen.on("click", function () {
    filterSection.addClass("open");
  });

  // Close filter section for sm and md devices
  filterClose.on("click", function () {
    filterSection.removeClass("open");
  });
});
