// Generated by CoffeeScript 1.10.0
var Input, View,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

View = require('./view');

Input = (function(superClass) {
  extend(Input, superClass);

  function Input() {
    return Input.__super__.constructor.apply(this, arguments);
  }

  Input.prototype.input = null;

  Input.prototype.valid = false;

  Input.prototype.errorMessage = '';

  Input.prototype.errorHtml = '<div class="error-container" if="{ errorMessage }">\n  <div class="error-message">{ errorMessage }</div>\n</div>';

  Input.prototype.beforeInit = function() {
    return this.html += this.errorHtml;
  };

  Input.prototype.init = function() {
    return this.input.on('validate', (function(_this) {
      return function(pRef) {
        return _this.validate(pRef);
      };
    })(this));
  };

  Input.prototype.getValue = function(event) {
    return event.target.value;
  };

  Input.prototype.change = function(event) {
    var name, ref, ref1, value;
    ref1 = this.input, ref = ref1.ref, name = ref1.name;
    value = this.getValue(event);
    if (value === ref.get(name)) {
      return;
    }
    this.input.ref.set(name, value);
    this.clearError();
    return this.validate();
  };

  Input.prototype.error = function(err) {
    var ref1;
    return this.errorMessage = (ref1 = err != null ? err.message : void 0) != null ? ref1 : err;
  };

  Input.prototype.changed = function() {};

  Input.prototype.clearError = function() {
    return this.errorMessage = '';
  };

  Input.prototype.validate = function(pRef) {
    var p;
    p = this.input.validate(this.input.ref, this.input.name).then((function(_this) {
      return function(value) {
        _this.changed(value);
        _this.valid = true;
        return _this.update();
      };
    })(this))["catch"]((function(_this) {
      return function(err) {
        _this.error(err);
        _this.valid = false;
        _this.update();
        throw err;
      };
    })(this));
    if (pRef != null) {
      pRef.p = p;
    }
    return p;
  };

  return Input;

})(View);

module.exports = Input;

//# sourceMappingURL=input.js.map