/**
 * Expects date-type `obs` with IDs
 *   - `lastPeriodDate`
 *   - `edd`
 * Expects DOM elements with IDs
 *   - `calculated-edd-and-gestational`
 *   - `calculated-edd`
 *   - `calculated-gestational-age-value`
 * 
 * Typical usage:
 * 
 * ```
 * jq(function() {
 *   setUpEdd(
 *     '<lookup expression="encounter.getEncounterDatetime().getTime()"/>',
 *     '<uimessage code="pihcore.weeks"/>'
 *   );
 * });
 */
function setUpEdd(currentEncounterDate, msgWeeks) {
  function updateEdd() {
    const lastPeriodDateValue = htmlForm.getValueIfLegal("lastPeriodDate.value");
    if (lastPeriodDateValue) {
      const lastPeriodDate = new Date(lastPeriodDateValue);
      const today = currentEncounterDate ? new Date(+currentEncounterDate) : new Date();
      const gestAgeMs = today.getTime() - lastPeriodDate.getTime();
      const gestAgeDays = Math.floor(gestAgeMs / (1000 * 3600 * 24))
      const gestAgeWeeks = Math.floor(gestAgeDays / 7);
      const gestAgeRemainderDays = gestAgeDays % 7;
      const locale = window.sessionContext.locale || navigator.language;
      const edd = new Date(lastPeriodDate.getTime() + 1000 * 60 * 60 * 24 * 280);
      jq("#calculated-edd-and-gestational").show();
      getField("edd.value").datepicker("setDate", edd);
      jq("#calculated-edd").text((Intl.DateTimeFormat(locale, { dateStyle: "full" })).format(edd));
      const gestAgeText = gestAgeWeeks + " " +
        (gestAgeRemainderDays ? gestAgeRemainderDays + "/7 " : " ") +
        msgWeeks;
      jq("#calculated-gestational-age-value").text(gestAgeText);
    } else {
      jq("#calculated-edd-and-gestational").hide();
    }
  };

  jq("#calculated-edd-and-gestational").hide();
  jq("#lastPeriodDate input[type='hidden']").change(function () {
    updateEdd();
  });

  updateEdd();
}

/**
 * 
 * This is for showing the calculated gestational age at birth,
 * for the delivery form.
 * 
 * @param {Date} lastPeriodDate 
 */
function setUpGestationalAgeAtBirth(lastPeriodDate) {
  function updateGestationalAge() {
    if (lastPeriodDate) {
      jq("#calculated-edd-wrapper").show();
      const deliveryDateValue = htmlForm.getValueIfLegal("deliveryDate.value");
      if (deliveryDateValue) {
        const gestAgeMs = deliveryDateValue.getTime() - lastPeriodDate.getTime();
        const gestAgeDays = Math.floor(gestAgeMs / (1000 * 3600 * 24))
        const gestAgeWeeks = Math.floor(gestAgeDays / 7);
        const gestAgeRemainderDays = gestAgeDays % 7;
        jq("#calculated-gestational").show();
        const gestAgeText = gestAgeWeeks + " " +
          (gestAgeRemainderDays ? gestAgeRemainderDays + "/7 " : " ") +
          msgWeeks;
        jq("#calculated-gestational-age-value").text(gestAgeText);
      } else {
        jq("#calculated-gestational").hide();
      }
    } else {
      jq("#calculated-edd-wrapper").hide();
    }
  };

  jq("#calculated-gestational").hide();

  jq("#deliveryDate").change(function () {
    updateGestationalAge();
  });

  updateGestationalAge();
}

function setUpNextButtonForSections(currentSection) {
  jq("#next").click(function () {
    window.htmlForm.getBeforeSubmit().push(function () {
      window.htmlForm.setReturnUrl(
        window.htmlForm.getReturnUrl() + "&goToNextSection=" + currentSection
      );
      return true;
    });

    window.htmlForm.submitHtmlForm();
  });

  jq("#submit").click(function () {
    window.htmlForm.submitHtmlForm();
  });
}

function setupCheckboxRadioGroups() {
  jq(".checkbox-radio-group").each(function(groupIndex, groupElement) {
    const options = jq(groupElement).find(".checkbox-radio-option");
    jq(options).each(function(index1, option1) {
      const checkbox = jq(option1).find("input:checkbox");
      jq(checkbox).change(function(event) {
        if(jq(checkbox).is(":checked")) {
          jq(options).each(function(index2, option2) {
            if (index1 !== index2) {
              jq(option2).find("input:checkbox").prop("checked", false);
            }
          });
        }
      });
    });
  });
}