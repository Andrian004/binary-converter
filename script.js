import Converter from "./libs/converter.js";

const inputArea = document.getElementById("inputTxt");
const outputArea = document.getElementById("output");
const actionsArea = document.getElementById("action");
const volume1 = document.getElementById("volume1");
const clearInputBtn = document.getElementById("clearInput");
const saveOutputBtn = document.getElementById("saveOutput");
const inputLength = document.getElementById("letter");
const copyOutputBtn = document.getElementById("copyOutput");
let timeoutId;

const object = new Converter(); // Create new converter instance

// Input event listener start ------------------------------------------------------------------
inputArea.addEventListener("input", () => {
  if (inputArea.value.length > 1000) return;
  clearTimeout(timeoutId);

  inputLength.innerText = `${inputArea.value.length} / 1000`;

  if (inputArea.value.length > 0) {
    clearInputBtn.classList.remove("hidden");
    volume1.classList.remove("hidden");
  } else {
    clearInputBtn.classList.add("hidden");
    volume1.classList.add("hidden");
  }

  timeoutId = setTimeout(() => {
    const input = inputArea.value;
    object.newInput = input;

    if (input.length > 0 && input.length <= 100) {
      outputArea.style.color = "#000000";
      outputArea.innerText = object.output;
      actionsArea.classList.remove("hidden");
      saveOutputBtn.classList.remove("hidden");
    } else if (input.length > 100) {
      outputArea.style.color = "#000000";
      outputArea.innerText = "Males ah kepanjangan:v";
      actionsArea.classList.remove("hidden");
      saveOutputBtn.classList.remove("hidden");
    } else {
      outputArea.style.color = "#565656";
      outputArea.innerText = "Terjemahan";
      actionsArea.classList.add("hidden");
      saveOutputBtn.classList.add("hidden");
    }
  }, 1000);
});
// Input event listener end --------------------------------------------------------------------

// Reset input start ---------------------------------------------------------------------------
const reset = () => {
  inputArea.value = "";
  object.newInput = "";
  inputLength.innerText = "0 / 1000";
  outputArea.innerText = "Terjemahan";
  outputArea.style.color = "#565656";
  clearInputBtn.classList.add("hidden");
  volume1.classList.add("hidden");
  actionsArea.classList.add("hidden");
  saveOutputBtn.classList.add("hidden");
};

clearInputBtn.addEventListener("click", () => reset());
// Reset input end -----------------------------------------------------------------------------

// Copy result start ---------------------------------------------------------------------------
copyOutputBtn.addEventListener("click", () => {
  const textToCopy = outputArea.innerText;
  const textarea = document.createElement("textarea");
  textarea.value = textToCopy;
  textarea.style.position = "fixed";
  textarea.style.top = 0;
  textarea.style.left = 0;
  textarea.style.opacity = 0;
  document.body.appendChild(textarea);
  textarea.select();
  textarea.setSelectionRange(0, 99999); // for mobile device
  navigator.clipboard.writeText(textarea.value);
  document.body.removeChild(textarea);
  alert("Copied to clipboard.");
});
// Copy result end -----------------------------------------------------------------------------

// Expand select area start --------------------------------------------------------------------
const leftExpandBtn = document.getElementById("leftExpandBtn");
const rightExpandBtn = document.getElementById("rightExpandBtn");
const mainArea = document.querySelector(".main-area");
const selectArea = document.querySelector(".main-area .select-area");
const gridItems = document.querySelectorAll(".grid-item");
const currLeftItems = ["Text", "Binary", "Decimal"];
const currRightItems = ["Binary", "Text", "Decimal"];
let toggleLeft = false;
let toggleRight = false;

const resetGridItemStyle = () => {
  gridItems.forEach((e) => {
    e.removeAttribute("style");
  });
};

const setActiveGridItem = (item) => {
  item.style.color = "#1b75fc";
  item.style.backgroundColor = "#1b75fc11";
};

const closeSelectElement = () => {
  document.querySelector(".main-area .input-area").classList.remove("hidden");
  document.querySelector(".main-area .output-area").classList.remove("hidden");
  selectArea.classList.add("hidden");
  if (toggleLeft) {
    rightExpandBtn.removeAttribute("disabled", false);
    leftExpandBtn.style.rotate = "0deg";
    mainArea.removeAttribute("style");

    toggleLeft = false;
  }
  if (toggleRight) {
    leftExpandBtn.removeAttribute("disabled", false);
    rightExpandBtn.style.rotate = "0deg";
    mainArea.removeAttribute("style");

    toggleRight = false;
  }
};

const expandElement = (toggleState, toggleBtn) => {
  document.querySelector(".main-area .input-area").classList.toggle("hidden");
  document.querySelector(".main-area .output-area").classList.toggle("hidden");

  if (toggleState) {
    toggleBtn.style.rotate = "0deg";
    mainArea.removeAttribute("style");
  } else {
    toggleBtn.style.rotate = "-180deg";
    mainArea.style.gridTemplateColumns = "1fr";
  }

  document.querySelector(".main-area .select-area").classList.toggle("hidden");
};

leftExpandBtn.addEventListener("click", () => {
  expandElement(toggleLeft, leftExpandBtn);

  if (toggleLeft) {
    rightExpandBtn.removeAttribute("disabled", false);
    toggleLeft = false;
  } else {
    rightExpandBtn.setAttribute("disabled", true);
    toggleLeft = true;
  }

  resetGridItemStyle();

  gridItems.forEach((e) => {
    if (e.firstElementChild.innerText === object.selectedLeftItem)
      setActiveGridItem(e);
  });
});

rightExpandBtn.addEventListener("click", () => {
  expandElement(toggleRight, rightExpandBtn);

  if (toggleRight) {
    leftExpandBtn.removeAttribute("disabled", false);
    toggleRight = false;
  } else {
    leftExpandBtn.setAttribute("disabled", true);
    toggleRight = true;
  }

  resetGridItemStyle();

  gridItems.forEach((e) => {
    if (e.firstElementChild.innerText === object.selectedRightItem)
      setActiveGridItem(e);
  });
});

document.addEventListener("click", (e) => {
  if (
    !leftExpandBtn.contains(e.target) &&
    !rightExpandBtn.contains(e.target) &&
    !selectArea.contains(e.target)
  ) {
    closeSelectElement();
  }
});
// Expand select area end ----------------------------------------------------------------------

// Selected item start -------------------------------------------------------------------------
const leftListBtn = document.getElementsByName("left-btn");
const rightListBtn = document.getElementsByName("right-btn");

const resetLeftSelectList = () => {
  leftListBtn.forEach((item, index) => {
    item.classList.remove("active");
    item.innerText = currLeftItems[index];
    if (currLeftItems[index] === object.selectedLeftItem) {
      item.classList.add("active");
    }
  });
};

const resetRightSelectList = () => {
  rightListBtn.forEach((item, index) => {
    item.innerText = currRightItems[index];
    item.classList.remove("active");
    if (currRightItems[index] === object.selectedRightItem) {
      item.classList.add("active");
    }
  });
};

const updateLeftItems = (value) => {
  if (!currLeftItems.includes(value)) {
    currLeftItems.pop();
    currLeftItems.unshift(value);
  }
};

const updateRightItems = (value) => {
  if (!currRightItems.includes(value)) {
    currRightItems.pop();
    currRightItems.unshift(value);
  }
};

leftListBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const newSelectedItem = e.target.innerText;
    if (newSelectedItem === object.selectedRightItem) {
      object.selectedRightItem = object.selectedLeftItem;
    }
    object.selectedLeftItem = newSelectedItem;
    resetLeftSelectList();
    resetRightSelectList();
  });
});

rightListBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const newSelectedItem = e.target.innerText;
    if (newSelectedItem === object.selectedLeftItem) {
      object.selectedLeftItem = object.selectedRightItem;
    }
    object.selectedRightItem = newSelectedItem;
    resetLeftSelectList();
    resetRightSelectList();
  });
});

gridItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    const selectedItem = e.target.innerText;
    if (toggleLeft && !toggleRight) {
      if (selectedItem === object.selectedRightItem) {
        object.selectedRightItem = object.selectedLeftItem;
      }
      object.selectedLeftItem = selectedItem;

      updateLeftItems(selectedItem);
      updateRightItems(object.selectedRightItem);
      resetGridItemStyle();
      setActiveGridItem(item);
      resetLeftSelectList();
      resetRightSelectList();
    } else {
      if (selectedItem === object.selectedLeftItem) {
        object.selectedLeftItem = object.selectedRightItem;
      }
      object.selectedRightItem = selectedItem;

      updateRightItems(selectedItem);
      updateLeftItems(object.selectedLeftItem);
      resetGridItemStyle();
      setActiveGridItem(item);
      resetRightSelectList();
      resetLeftSelectList();
    }

    closeSelectElement();
    reset();
  });
});
// Selected item end ---------------------------------------------------------------------------

// Swap value start -------------------------------------------------------------------------
document.getElementById("reverseValue").addEventListener("click", () => {
  [object.selectedLeftItem, object.selectedRightItem] = [
    object.selectedRightItem,
    object.selectedLeftItem,
  ];
  updateLeftItems(object.selectedLeftItem);
  updateRightItems(object.selectedRightItem);
  resetLeftSelectList();
  resetRightSelectList();
  reset();
});
// Swap value end ---------------------------------------------------------------------------

// Contribution button start -------------------------------------------------------------------
document.getElementById("contribution").addEventListener("click", () => {
  window.open("https://github.com/Andrian004/binary-converter", "_blank");
});
// Contribution button end ---------------------------------------------------------------------
