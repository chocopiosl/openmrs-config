/**
 * Requires, given an id '[id]':
 *   - Elements with IDs '[id]-[n]' where '[n]' counts the elements (starting from 1)
 *   - A button with ID 'show-more-[id]'
 *   - A button with ID 'show-less-[id]'
 */
 function setUpExpandableSection(id) {
  
  const elements = jq("[id^=" + id + "]").filter(
    function() { return this.id.match(new RegExp(id + "-\\d+$")) }
  );
  console.log(elements);
  const showLessButton = jq("#show-less-" + id);
  const showMoreButton = jq("#show-more-" + id);
  let numToShow = 1;

  function hasValue(element) {
    let hasValues = false;
    const inputElements = jq(element).find("input:checked, input[type=text], select, input[type=hidden], input[type=email], input[type=file], input[type=image], input[type=number], input[type=password], input[type=search], input[type=tel] input:not([type])");
    inputElements.each(
      function (i, inputElement) {
        if (jq(inputElement).val()) {
          hasValues = true;
        }
      }
    )
    return hasValues;
  };

  function init() {
    while (hasValue(elements[numToShow - 1]) && numToShow < elements.length) {
      numToShow += 1;
    }
    update();
  };

  function update() {
    console.log('updating for', numToShow);
    for (let i = 0; i < elements.length; i++) {
      if (i < numToShow) {
        jq(elements[i]).show();
      } else {
        jq(elements[i]).hide();
      }
    }

    if (numToShow > 1) {
      showLessButton.show();
    } else {
      showLessButton.hide();
    }

    if (numToShow < elements.length) {
      showMoreButton.show();
    } else {
      showMoreButton.hide();
    }
  };

  showLessButton.click(function () {
    numToShow -= 1;
    update();
  });

  showMoreButton.click(function () {
    numToShow += 1;
    update();
  });

  init();
}
