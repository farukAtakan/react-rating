'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && _setPrototypeOf(t, e);
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

var style = {
  display: 'inline-block',
  borderRadius: '50%',
  border: '5px double white',
  width: 30,
  height: 30
};
var Style = {
  empty: _objectSpread2(_objectSpread2({}, style), {}, {
    backgroundColor: '#ccc'
  }),
  full: _objectSpread2(_objectSpread2({}, style), {}, {
    backgroundColor: 'black'
  }),
  placeholder: _objectSpread2(_objectSpread2({}, style), {}, {
    backgroundColor: 'red'
  })
};

// Return the corresponding React node for an icon.
var _iconNode = function _iconNode(icon) {
  // If it is already a React Element just return it.
  if ( /*#__PURE__*/React.isValidElement(icon)) {
    return icon;
  }
  // If it is an object, try to use it as a CSS style object.
  if (_typeof(icon) === 'object' && icon !== null) {
    return /*#__PURE__*/React.createElement("span", {
      style: icon
    });
  }
  // If it is a string, use it as class names.
  if (Object.prototype.toString.call(icon) === '[object String]') {
    return /*#__PURE__*/React.createElement("span", {
      className: icon
    });
  }
};
var RatingSymbol = /*#__PURE__*/function (_React$PureComponent) {
  function RatingSymbol() {
    _classCallCheck(this, RatingSymbol);
    return _callSuper(this, RatingSymbol, arguments);
  }
  _inherits(RatingSymbol, _React$PureComponent);
  return _createClass(RatingSymbol, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        index = _this$props.index,
        inactiveIcon = _this$props.inactiveIcon,
        activeIcon = _this$props.activeIcon,
        percent = _this$props.percent,
        direction = _this$props.direction,
        readonly = _this$props.readonly,
        onClick = _this$props.onClick,
        onMouseMove = _this$props.onMouseMove,
        onTouchEnd = _this$props.onTouchEnd;
      var backgroundNode = _iconNode(inactiveIcon);
      var showbgIcon = percent < 100;
      var bgIconContainerStyle = showbgIcon ? {} : {
        visibility: 'hidden'
      };
      var iconNode = _iconNode(activeIcon);
      var iconContainerStyle = _defineProperty(_defineProperty({
        display: 'inline-block',
        position: 'absolute',
        overflow: 'hidden',
        top: 0
      }, direction === 'rtl' ? 'right' : 'left', 0), "width", "".concat(percent, "%"));
      var style = {
        cursor: !readonly ? 'pointer' : 'inherit',
        display: 'inline-block',
        position: 'relative'
      };
      function handleMouseMove(e) {
        if (onMouseMove) {
          onMouseMove(index, e);
        }
      }
      function handleMouseClick(e) {
        if (onClick) {
          // [Supporting both TouchEvent and MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/Supporting_both_TouchEvent_and_MouseEvent)
          // We must prevent firing click event twice on touch devices.
          e.preventDefault();
          onClick(index, e);
        }
      }
      function handleTouchEnd(e) {
        if (onTouchEnd) {
          onTouchEnd(index, e);
        }
      }
      return /*#__PURE__*/React.createElement("span", {
        style: style,
        onClick: handleMouseClick,
        onMouseMove: handleMouseMove,
        onTouchMove: handleMouseMove,
        onTouchEnd: handleTouchEnd
      }, /*#__PURE__*/React.createElement("span", {
        style: bgIconContainerStyle
      }, backgroundNode), /*#__PURE__*/React.createElement("span", {
        style: iconContainerStyle
      }, iconNode));
    }
  }]);
}(React.PureComponent); // Define propTypes only in development. They will be void in production.

var Rating = /*#__PURE__*/function (_React$PureComponent) {
  function Rating(props) {
    var _this;
    _classCallCheck(this, Rating);
    _this = _callSuper(this, Rating, [props]);
    _this.state = {
      // Indicates the value that is displayed to the user in the form of symbols.
      // It can be either 0 (for no displayed symbols) or (0, end]
      displayValue: _this.props.value,
      // Indicates if the user is currently hovering over the rating element
      interacting: false
    };
    _this.onMouseLeave = _this.onMouseLeave.bind(_this);
    _this.symbolMouseMove = _this.symbolMouseMove.bind(_this);
    _this.symbolClick = _this.symbolClick.bind(_this);
    _this.symbolEnd = _this.symbolEnd.bind(_this);
    return _this;
  }

  // ...

  // NOTE: This callback is a little bit fragile. Needs some "care" because
  // it relies on brittle state kept with different props and state
  // combinations to try to figure out from where we are coming, I mean, what
  // caused this update.
  _inherits(Rating, _React$PureComponent);
  return _createClass(Rating, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // When hover ends, call this.props.onHover with no value.
      if (prevState.interacting && !this.state.interacting) {
        return this.props.onHover();
      }

      // When hover over.
      // Hover in should only be emitted while we are hovering (interacting),
      // unless we changed the value, usually originated by an onClick event.
      // We do not want to emit a hover in event again on the clicked
      // symbol.
      if (this.state.interacting && prevProps.value == this.props.value) {
        this.props.onHover(this.state.displayValue);
      }
    }
  }, {
    key: "symbolEnd",
    value: function symbolEnd(symbolIndex, event) {
      // Do not raise the click event on quiet mode when a touch end is received.
      // On quiet mode the touch end event only notifies that we have left the
      // symbol. We wait for the actual click event to call the symbolClick.
      // On not quiet mode we simulate the click event on touch end and we just
      // prevent the real on click event to be raised.
      // NOTE: I know how we manage click events on touch devices is a little bit
      // weird because we do not notify the starting value that was clicked but
      // the last (touched) value.
      if (!this.props.quiet) {
        this.symbolClick(symbolIndex, event);
        event.preventDefault();
      }
      // On touch end we are "leaving" the symbol.
      this.onMouseLeave();
    }
  }, {
    key: "symbolClick",
    value: function symbolClick(symbolIndex, event) {
      var value = this.calculateDisplayValue(symbolIndex, event);
      this.props.onClick(value, event);
    }
  }, {
    key: "symbolMouseMove",
    value: function symbolMouseMove(symbolIndex, event) {
      var value = this.calculateDisplayValue(symbolIndex, event);
      // This call should cause an update only if the state changes.
      // Mainly the first time the mouse enters and whenever the value changes.
      // So DidComponentUpdate is NOT called for every mouse movement.
      this.setState({
        interacting: !this.props.readonly,
        displayValue: value
      });
    }
  }, {
    key: "onMouseLeave",
    value: function onMouseLeave() {
      this.setState({
        displayValue: this.props.value,
        interacting: false
      });
    }
  }, {
    key: "calculateDisplayValue",
    value: function calculateDisplayValue(symbolIndex, event) {
      var percentage = this.calculateHoverPercentage(event);
      // Get the closest top fraction.
      var fraction = Math.ceil(percentage % 1 * this.props.fractions) / this.props.fractions;
      // Truncate decimal trying to avoid float precission issues.
      var precision = Math.pow(10, 3);
      var displayValue = symbolIndex + (Math.floor(percentage) + Math.floor(fraction * precision) / precision);
      // ensure the returned value is greater than 0 and lower than totalSymbols
      return displayValue > 0 ? displayValue > this.props.totalSymbols ? this.props.totalSymbols : displayValue : 1 / this.props.fractions;
    }
  }, {
    key: "calculateHoverPercentage",
    value: function calculateHoverPercentage(event) {
      var clientX = event.nativeEvent.type.indexOf("touch") > -1 ? event.nativeEvent.type.indexOf("touchend") > -1 ? event.changedTouches[0].clientX : event.touches[0].clientX : event.clientX;
      var targetRect = event.target.getBoundingClientRect();
      var delta = this.props.direction === 'rtl' ? targetRect.right - clientX : clientX - targetRect.left;

      // Returning 0 if the delta is negative solves the flickering issue
      return delta < 0 ? 0 : delta / targetRect.width;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        readonly = _this$props.readonly,
        quiet = _this$props.quiet,
        totalSymbols = _this$props.totalSymbols,
        value = _this$props.value,
        placeholderValue = _this$props.placeholderValue,
        direction = _this$props.direction,
        emptySymbol = _this$props.emptySymbol,
        fullSymbol = _this$props.fullSymbol,
        placeholderSymbol = _this$props.placeholderSymbol,
        className = _this$props.className,
        id = _this$props.id,
        style = _this$props.style,
        tabIndex = _this$props.tabIndex;
      var _this$state = this.state,
        displayValue = _this$state.displayValue,
        interacting = _this$state.interacting;
      var symbolNodes = [];
      var empty = [].concat(emptySymbol);
      var full = [].concat(fullSymbol);
      var placeholder = [].concat(placeholderSymbol);
      var shouldDisplayPlaceholder = placeholderValue !== 0 && value === 0 && !interacting;

      // The value that will be used as base for calculating how to render the symbols
      var renderedValue;
      if (shouldDisplayPlaceholder) {
        renderedValue = placeholderValue;
      } else {
        renderedValue = quiet ? value : displayValue;
      }

      // The amount of full symbols
      var fullSymbols = Math.floor(renderedValue);
      for (var i = 0; i < totalSymbols; i++) {
        var percent = void 0;
        // Calculate each symbol's fullness percentage
        if (i - fullSymbols < 0) {
          percent = 100;
        } else if (i - fullSymbols === 0) {
          percent = (renderedValue - i) * 100;
        } else {
          percent = 0;
        }
        symbolNodes.push( /*#__PURE__*/React.createElement(RatingSymbol, _extends({
          key: i,
          index: i,
          readonly: readonly,
          inactiveIcon: empty[i % empty.length],
          activeIcon: shouldDisplayPlaceholder ? placeholder[i % full.length] : full[i % full.length],
          percent: percent,
          direction: direction
        }, !readonly && {
          onClick: this.symbolClick,
          onMouseMove: this.symbolMouseMove,
          onTouchMove: this.symbolMouseMove,
          onTouchEnd: this.symbolEnd
        })));
      }
      return /*#__PURE__*/React.createElement("span", _extends({
        id: id,
        style: _objectSpread2(_objectSpread2({}, style), {}, {
          display: 'inline-block',
          direction: direction
        }),
        className: className,
        tabIndex: tabIndex,
        "aria-label": this.props['aria-label']
      }, !readonly && {
        onMouseLeave: this.onMouseLeave
      }), symbolNodes);
    }
  }]);
}(React.PureComponent); // Define propTypes only in development.

function noop() {}
noop._name = 'react_rating_noop';

var RatingAPILayer = /*#__PURE__*/function (_React$PureComponent) {
  function RatingAPILayer(props) {
    var _this;
    _classCallCheck(this, RatingAPILayer);
    _this = _callSuper(this, RatingAPILayer, [props]);
    _this.state = {
      value: props.initialRating
    };
    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleHover = _this.handleHover.bind(_this);
    return _this;
  }
  _inherits(RatingAPILayer, _React$PureComponent);
  return _createClass(RatingAPILayer, [{
    key: "handleClick",
    value: function handleClick(value, e) {
      var _this2 = this;
      var newValue = this.translateDisplayValueToValue(value);
      this.props.onClick(newValue);
      // Avoid calling setState if not necessary. Micro optimisation.
      if (this.state.value !== newValue) {
        // If we have a new value trigger onChange callback.
        this.setState({
          value: newValue
        }, function () {
          return _this2.props.onChange(_this2.state.value);
        });
      }
    }
  }, {
    key: "handleHover",
    value: function handleHover(displayValue) {
      var value = displayValue === undefined ? displayValue : this.translateDisplayValueToValue(displayValue);
      this.props.onHover(value);
    }
  }, {
    key: "translateDisplayValueToValue",
    value: function translateDisplayValueToValue(displayValue) {
      var translatedValue = displayValue * this.props.step + this.props.start;
      // minimum value cannot be equal to start, since it's exclusive
      return translatedValue === this.props.start ? translatedValue + 1 / this.props.fractions : translatedValue;
    }
  }, {
    key: "tranlateValueToDisplayValue",
    value: function tranlateValueToDisplayValue(value) {
      if (value === undefined) {
        return 0;
      }
      return (value - this.props.start) / this.props.step;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        step = _this$props.step,
        emptySymbol = _this$props.emptySymbol,
        fullSymbol = _this$props.fullSymbol,
        placeholderSymbol = _this$props.placeholderSymbol,
        readonly = _this$props.readonly,
        quiet = _this$props.quiet,
        fractions = _this$props.fractions,
        direction = _this$props.direction,
        start = _this$props.start,
        stop = _this$props.stop,
        id = _this$props.id,
        className = _this$props.className,
        style = _this$props.style,
        tabIndex = _this$props.tabIndex;
      function calculateTotalSymbols(start, stop, step) {
        return Math.floor((stop - start) / step);
      }
      return /*#__PURE__*/React.createElement(Rating, {
        id: id,
        style: style,
        className: className,
        tabIndex: tabIndex,
        "aria-label": this.props['aria-label'],
        totalSymbols: calculateTotalSymbols(start, stop, step),
        value: this.tranlateValueToDisplayValue(this.state.value),
        placeholderValue: this.tranlateValueToDisplayValue(this.props.placeholderRating),
        readonly: readonly,
        quiet: quiet,
        fractions: fractions,
        direction: direction,
        emptySymbol: emptySymbol,
        fullSymbol: fullSymbol,
        placeholderSymbol: placeholderSymbol,
        onClick: this.handleClick,
        onHover: this.handleHover
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      return {
        value: props.initialRating
      };
    }
  }]);
}(React.PureComponent);
RatingAPILayer.defaultProps = {
  start: 0,
  stop: 5,
  step: 1,
  readonly: false,
  quiet: false,
  fractions: 1,
  direction: 'ltr',
  onHover: noop,
  onClick: noop,
  onChange: noop,
  emptySymbol: Style.empty,
  fullSymbol: Style.full,
  placeholderSymbol: Style.placeholder
};

module.exports = RatingAPILayer;
