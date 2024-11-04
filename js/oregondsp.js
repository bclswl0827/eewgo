(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'oregondsp'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'oregondsp'.");
    }
    root.oregondsp = factory(typeof oregondsp === 'undefined' ? {} : oregondsp, this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var get_PI = kotlin_kotlin.$_$.o;
  var Unit_getInstance = kotlin_kotlin.$_$.g;
  var classMeta = kotlin_kotlin.$_$.i;
  var objectMeta = kotlin_kotlin.$_$.l;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.b;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.v;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.c;
  var ensureNotNull = kotlin_kotlin.$_$.u;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.e;
  var Char = kotlin_kotlin.$_$.r;
  var toLong = kotlin_kotlin.$_$.m;
  var toString = kotlin_kotlin.$_$.n;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.a;
  var fillArrayVal = kotlin_kotlin.$_$.j;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.d;
  var round = kotlin_kotlin.$_$.q;
  var numberToInt = kotlin_kotlin.$_$.k;
  var Default_getInstance = kotlin_kotlin.$_$.f;
  var roundToInt = kotlin_kotlin.$_$.p;
  var println = kotlin_kotlin.$_$.h;
  var THROW_ISE = kotlin_kotlin.$_$.t;
  var Enum = kotlin_kotlin.$_$.s;
  //endregion
  //region block: pre-declaration
  HammingWindow.prototype = Object.create(Window.prototype);
  HammingWindow.prototype.constructor = HammingWindow;
  HanningWindow.prototype = Object.create(Window.prototype);
  HanningWindow.prototype.constructor = HanningWindow;
  CDFTsr16.prototype = Object.create(CDFTsr.prototype);
  CDFTsr16.prototype.constructor = CDFTsr16;
  CDFTsr8.prototype = Object.create(CDFTsr.prototype);
  CDFTsr8.prototype.constructor = CDFTsr8;
  FIRTypeIII.prototype = Object.create(EquirippleFIRFilter.prototype);
  FIRTypeIII.prototype.constructor = FIRTypeIII;
  CenteredDifferentiator.prototype = Object.create(FIRTypeIII.prototype);
  CenteredDifferentiator.prototype.constructor = CenteredDifferentiator;
  CenteredHilbertTransform.prototype = Object.create(FIRTypeIII.prototype);
  CenteredHilbertTransform.prototype.constructor = CenteredHilbertTransform;
  FIRTypeI.prototype = Object.create(EquirippleFIRFilter.prototype);
  FIRTypeI.prototype.constructor = FIRTypeI;
  EquirippleBandpass.prototype = Object.create(FIRTypeI.prototype);
  EquirippleBandpass.prototype.constructor = EquirippleBandpass;
  FIRTypeII.prototype = Object.create(EquirippleFIRFilter.prototype);
  FIRTypeII.prototype.constructor = FIRTypeII;
  EquirippleHalfBandPrototype.prototype = Object.create(FIRTypeII.prototype);
  EquirippleHalfBandPrototype.prototype.constructor = EquirippleHalfBandPrototype;
  EquirippleHighpass.prototype = Object.create(FIRTypeI.prototype);
  EquirippleHighpass.prototype.constructor = EquirippleHighpass;
  EquirippleLowpass.prototype = Object.create(FIRTypeI.prototype);
  EquirippleLowpass.prototype.constructor = EquirippleLowpass;
  FIRTypeIV.prototype = Object.create(EquirippleFIRFilter.prototype);
  FIRTypeIV.prototype.constructor = FIRTypeIV;
  StaggeredDifferentiator.prototype = Object.create(FIRTypeIV.prototype);
  StaggeredDifferentiator.prototype.constructor = StaggeredDifferentiator;
  StaggeredHilbertTranform.prototype = Object.create(FIRTypeIV.prototype);
  StaggeredHilbertTranform.prototype.constructor = StaggeredHilbertTranform;
  AnalogButterworth.prototype = Object.create(AnalogPrototype.prototype);
  AnalogButterworth.prototype.constructor = AnalogButterworth;
  AnalogChebyshevI.prototype = Object.create(AnalogPrototype.prototype);
  AnalogChebyshevI.prototype.constructor = AnalogChebyshevI;
  AnalogChebyshevII.prototype = Object.create(AnalogPrototype.prototype);
  AnalogChebyshevII.prototype.constructor = AnalogChebyshevII;
  Butterworth.prototype = Object.create(IIRFilter.prototype);
  Butterworth.prototype.constructor = Butterworth;
  ChebyshevI.prototype = Object.create(IIRFilter.prototype);
  ChebyshevI.prototype.constructor = ChebyshevI;
  ChebyshevII.prototype = Object.create(IIRFilter.prototype);
  ChebyshevII.prototype.constructor = ChebyshevII;
  PassbandType.prototype = Object.create(Enum.prototype);
  PassbandType.prototype.constructor = PassbandType;
  ThiranAllpass.prototype = Object.create(Allpass.prototype);
  ThiranAllpass.prototype.constructor = ThiranAllpass;
  //endregion
  function HammingWindow(N) {
    Window.call(this, N);
    var inductionVariable = 0;
    var last = N - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.w_1;
        var tmp$ret$0;
        // Inline function 'kotlin.math.cos' call
        var tmp0_cos = -get_PI() + i * 2.0 * get_PI() / (N - 1 | 0);
        tmp$ret$0 = Math.cos(tmp0_cos);
        tmp[i] = 0.54 + 0.46 * tmp$ret$0;
      }
       while (!(i === last));
  }
  HammingWindow.$metadata$ = classMeta('HammingWindow', undefined, undefined, undefined, undefined, Window.prototype);
  function HanningWindow(N) {
    Window.call(this, N);
    var inductionVariable = 0;
    var last = N - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.w_1;
        var tmp$ret$0;
        // Inline function 'kotlin.math.cos' call
        var tmp0_cos = -get_PI() + i * 2.0 * get_PI() / (N - 1 | 0);
        tmp$ret$0 = Math.cos(tmp0_cos);
        tmp[i] = 0.5 + 0.5 * tmp$ret$0;
      }
       while (!(i === last));
  }
  HanningWindow.$metadata$ = classMeta('HanningWindow', undefined, undefined, undefined, undefined, Window.prototype);
  function Sequence_init_$Init$(x, $this) {
    Sequence.call($this);
    $this.array_1 = new Float32Array(x.length);
    var tmp = $this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = x;
    tmp$ret$1 = tmp$ret$0.slice();
    tmp.array_1 = tmp$ret$1;
    return $this;
  }
  function Sequence_fromArray(x) {
    return Sequence_init_$Init$(x, Object.create(Sequence.prototype));
  }
  function Sequence_init_$Init$_0(N, $this) {
    Sequence.call($this);
    $this.array_1 = new Float32Array(N);
    return $this;
  }
  function Sequence_ofSize(N) {
    return Sequence_init_$Init$_0(N, Object.create(Sequence.prototype));
  }
  function Companion() {
    Companion_instance = this;
  }
  Companion.prototype.aliasArray = function (src, dst) {
    var slength = src.length;
    var dlength = dst.length;
    var inductionVariable = 0;
    if (inductionVariable <= dlength)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        dst[i] = 0.0;
      }
       while (!(i === dlength));
    var inductionVariable_0 = 0;
    var last = slength - 1 | 0;
    if (inductionVariable_0 <= last)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp2_array = dst;
        var tmp3_index0 = i_0 % dlength | 0;
        tmp2_array[tmp3_index0] = tmp2_array[tmp3_index0] + src[i_0];
      }
       while (!(i_0 === last));
  };
  Companion.prototype.reverseArray = function (y) {
    var i = 0;
    var j = y.length - 1 | 0;
    while (i < j) {
      var tmp = y[i];
      y[i] = y[j];
      y[j] = tmp;
      var tmp0 = i;
      i = tmp0 + 1 | 0;
      var tmp1 = j;
      j = tmp1 - 1 | 0;
    }
  };
  Companion.prototype.rmeanArray = function (y) {
    var mean = 0.0;
    var inductionVariable = 0;
    var last = y.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        mean = mean + y[i];
      }
       while (inductionVariable <= last);
    mean = mean / y.length;
    var inductionVariable_0 = 0;
    var last_0 = y.length - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp2_array = y;
        var tmp3_index0 = i_0;
        tmp2_array[tmp3_index0] = tmp2_array[tmp3_index0] - mean;
      }
       while (inductionVariable_0 <= last_0);
  };
  Companion.prototype.circularShiftArray = function (y, shift) {
    var N = y.length;
    var s = shift % N | 0;
    if (s > 0 ? (N - s | 0) < s : false)
      s = s - N | 0;
    else if (s < 0 ? (N + s | 0) < (-s | 0) : false)
      s = s + N | 0;
    if (s < 0)
      s = imul(s, -1);
    var tmp = new Float32Array(s);
    if (s > 0) {
      var inductionVariable = 0;
      var last = s - 1 | 0;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          tmp[i] = y[(N - s | 0) + i | 0];
        }
         while (!(i === last));
      var inductionVariable_0 = (N - 1 | 0) - s | 0;
      if (0 <= inductionVariable_0)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          y[i_0 + s | 0] = y[i_0];
        }
         while (0 <= inductionVariable_0);
      var inductionVariable_1 = 0;
      var last_0 = s - 1 | 0;
      if (inductionVariable_1 <= last_0)
        do {
          var i_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          y[i_1] = tmp[i_1];
        }
         while (!(i_1 === last_0));
    }
    if (s < 0) {
      var inductionVariable_2 = 0;
      var last_1 = (-s | 0) - 1 | 0;
      if (inductionVariable_2 <= last_1)
        do {
          var i_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          tmp[i_2] = y[i_2];
        }
         while (!(i_2 === last_1));
      var inductionVariable_3 = -s | 0;
      var last_2 = N - 1 | 0;
      if (inductionVariable_3 <= last_2)
        do {
          var i_3 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          y[i_3 + s | 0] = y[i_3];
        }
         while (!(i_3 === last_2));
      var inductionVariable_4 = 0;
      var last_3 = (-s | 0) - 1 | 0;
      if (inductionVariable_4 <= last_3)
        do {
          var i_4 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + 1 | 0;
          y[(N + s | 0) + i_4 | 0] = tmp[i_4];
        }
         while (!(i_4 === last_3));
    }
  };
  Companion.prototype.zeroShiftArray = function (y, shift) {
    if (imul(-1, shift) >= y.length ? true : shift >= y.length) {
      var inductionVariable = 0;
      var last = y.length;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          y[i] = 0.0;
        }
         while (!(i === last));
    } else if (shift > 0) {
      var inductionVariable_0 = y.length - 1 | 0;
      if (shift <= inductionVariable_0)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          y[i_0] = y[i_0 - shift | 0];
        }
         while (!(i_0 === shift));
      var inductionVariable_1 = 0;
      var last_0 = shift - 1 | 0;
      if (inductionVariable_1 <= last_0)
        do {
          var i_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          y[i_1] = 0.0;
        }
         while (!(i_1 === last_0));
    } else if (shift < 0) {
      var inductionVariable_2 = 0;
      var last_1 = (y.length + shift | 0) - 1 | 0;
      if (inductionVariable_2 <= last_1)
        do {
          var i_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          y[i_2] = y[i_2 - shift | 0];
        }
         while (!(i_2 === last_1));
      var inductionVariable_3 = y.length + shift | 0;
      var last_2 = y.length - 1 | 0;
      if (inductionVariable_3 <= last_2)
        do {
          var i_3 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          y[i_3] = 0.0;
        }
         while (!(i_3 === last_2));
    }
  };
  Companion.prototype.decimateArray = function (y, decrate, ydecimated) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.min' call
    var tmp0_min = ydecimated.length;
    var tmp1_min = y.length / decrate | 0;
    tmp$ret$0 = Math.min(tmp0_min, tmp1_min);
    var n = tmp$ret$0;
    var inductionVariable = 0;
    var last = n - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        ydecimated[i] = y[imul(i, decrate)];
      }
       while (!(i === last));
  };
  Companion.prototype.stretchArray = function (y, rate, ystretched) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.min' call
    var tmp0_min = y.length;
    var tmp1_min = ystretched.length / rate | 0;
    tmp$ret$0 = Math.min(tmp0_min, tmp1_min);
    var n = tmp$ret$0;
    var inductionVariable = 0;
    var last = ystretched.length;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        ystretched[i] = 0.0;
      }
       while (!(i === last));
    var inductionVariable_0 = 0;
    var last_0 = n - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        ystretched[imul(i_0, rate)] = y[i_0];
      }
       while (!(i_0 === last_0));
  };
  Companion.prototype.timesEqualsArray = function (y, f) {
    var inductionVariable = 0;
    var last = y.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = y;
        var tmp2_index0 = i;
        tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0] * f;
      }
       while (inductionVariable <= last);
  };
  Companion.prototype.padArray = function (y, ypadded) {
    if (y.length < ypadded.length) {
      var inductionVariable = 0;
      var last = y.length;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          ypadded[i] = y[i];
        }
         while (!(i === last));
      var inductionVariable_0 = y.length;
      var last_0 = ypadded.length;
      if (inductionVariable_0 <= last_0)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          ypadded[i_0] = 0.0;
        }
         while (!(i_0 === last_0));
    } else {
      var inductionVariable_1 = 0;
      var last_1 = ypadded.length;
      if (inductionVariable_1 <= last_1)
        do {
          var i_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          ypadded[i_1] = y[i_1];
        }
         while (!(i_1 === last_1));
    }
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  Sequence.prototype.set_array_tn1sl2_k$ = function (_set____db54di) {
    this.array_1 = _set____db54di;
  };
  Sequence.prototype.get_array_iosoq8_k$ = function () {
    return this.array_1;
  };
  Sequence.prototype.alias = function (N) {
    var newx = new Float32Array(N);
    Companion_getInstance().aliasArray(this.array_1, newx);
    this.array_1 = newx;
  };
  Sequence.prototype.getForIndex = function (index) {
    var retval = 0.0;
    if (index >= 0 ? index < this.array_1.length : false)
      retval = this.array_1[index];
    return retval;
  };
  Sequence.prototype.reverse = function () {
    Companion_getInstance().reverseArray(this.array_1);
  };
  Sequence.prototype.rmean = function () {
    Companion_getInstance().rmeanArray(this.array_1);
  };
  Sequence.prototype.circularShift = function (shift) {
    Companion_getInstance().circularShiftArray(this.array_1, shift);
  };
  Sequence.prototype.zeroShift = function (shift) {
    Companion_getInstance().zeroShiftArray(this.array_1, shift);
  };
  Sequence.prototype.decimate = function (decrate) {
    var tmp = new Float32Array(this.array_1.length / decrate | 0);
    Companion_getInstance().decimateArray(this.array_1, decrate, tmp);
    this.array_1 = tmp;
  };
  Sequence.prototype.stretch = function (rate) {
    var tmp = new Float32Array(imul(this.array_1.length, rate));
    Companion_getInstance().stretchArray(this.array_1, rate, tmp);
    this.array_1 = tmp;
  };
  Sequence.prototype.timesEquals = function (f) {
    Companion_getInstance().timesEqualsArray(this.array_1, f);
  };
  Sequence.prototype.pad = function (n) {
    if (n > this.array_1.length) {
      var tmp = new Float32Array(n);
      Companion_getInstance().padArray(this.array_1, tmp);
      this.array_1 = tmp;
    }
  };
  function Sequence() {
    Companion_getInstance();
  }
  Sequence.$metadata$ = classMeta('Sequence');
  Object.defineProperty(Sequence.prototype, 'array', {
    configurable: true,
    get: Sequence.prototype.get_array_iosoq8_k$,
    set: Sequence.prototype.set_array_tn1sl2_k$
  });
  function Window_init_$Init$(w, $this) {
    Window.call($this, w.length);
    var tmp = $this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = w;
    tmp$ret$1 = tmp$ret$0.slice();
    tmp.w_1 = tmp$ret$1;
    return $this;
  }
  function Window_fromArray(w) {
    return Window_init_$Init$(w, Object.create(Window.prototype));
  }
  function Window(N) {
    this.w_1 = new Float32Array(N);
  }
  Window.prototype.set_w_6vu9ec_k$ = function (_set____db54di) {
    this.w_1 = _set____db54di;
  };
  Window.prototype.get_w_1mhr66_k$ = function () {
    return this.w_1;
  };
  Window.prototype.length = function () {
    return this.w_1.length;
  };
  Window.prototype.timesEquals = function (x) {
    if (!(x.length === this.w_1.length))
      throw IllegalArgumentException_init_$Create$('Argument length does not match window length');
    var inductionVariable = 0;
    var last = this.w_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.w_1;
        var tmp2_index0 = i;
        tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0] * x[i];
      }
       while (inductionVariable <= last);
  };
  Window.prototype.get_array_iosoq8_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.w_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    return tmp$ret$1;
  };
  Window.prototype.windowArray = function (x, index, y) {
    if (!(y.length === this.w_1.length))
      throw IllegalArgumentException_init_$Create$('Destination array length does not match window length');
    var inductionVariable = 0;
    var last = this.w_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var j = index + i | 0;
        if (j >= 0 ? j < x.length : false) {
          y[i] = this.w_1[i] * x[j];
        } else {
          y[i] = 0.0;
        }
      }
       while (inductionVariable <= last);
  };
  Window.$metadata$ = classMeta('Window');
  Object.defineProperty(Window.prototype, 'w', {
    configurable: true,
    get: Window.prototype.get_w_1mhr66_k$,
    set: Window.prototype.set_w_6vu9ec_k$
  });
  Object.defineProperty(Window.prototype, 'array', {
    configurable: true,
    get: Window.prototype.get_array_iosoq8_k$
  });
  function _set_yr__dl8bxe($this, _set____db54di) {
    $this.yr_1 = _set____db54di;
  }
  function _get_yr__ndcfbm($this) {
    var tmp = $this.yr_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('yr');
    }
  }
  function _set_yi__dl8c55($this, _set____db54di) {
    $this.yi_1 = _set____db54di;
  }
  function _get_yi__ndcf3v($this) {
    var tmp = $this.yi_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('yi');
    }
  }
  function _set_arraysUnlinked__eskfgr($this, _set____db54di) {
    $this.arraysUnlinked_1 = _set____db54di;
  }
  function _get_arraysUnlinked__upg6gx($this) {
    return $this.arraysUnlinked_1;
  }
  function _set_c__db558i($this, _set____db54di) {
    $this.c_1 = _set____db54di;
  }
  function _get_c__7mloi6($this) {
    var tmp = $this.c_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('c');
    }
  }
  function _set_c3__dl8tqx($this, _set____db54di) {
    $this.c3__1 = _set____db54di;
  }
  function _get_c3__ndbxi3($this) {
    var tmp = $this.c3__1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('c3');
    }
  }
  function _set_s__db55ma($this, _set____db54di) {
    $this.s_1 = _set____db54di;
  }
  function _get_s__7mlovy($this) {
    var tmp = $this.s_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('s');
    }
  }
  function _set_s3__dl8hvt($this, _set____db54di) {
    $this.s3__1 = _set____db54di;
  }
  function _get_s3__ndc9d7($this) {
    var tmp = $this.s3__1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('s3');
    }
  }
  function _get_dft__e670yn($this) {
    return $this.dft_1;
  }
  function CDFT_init_$Init$(log2N, $this) {
    CDFT.call($this);
    if (log2N < 3)
      throw IllegalArgumentException_init_$Create$('DFT size must be >= 8');
    $this.arraysUnlinked_1 = true;
    $this.log2N_1 = log2N;
    $this.N_1 = 1 << log2N;
    createTable($this);
    if (log2N === 3)
      $this.dft_1 = new CDFTsr8(0, 1, 0);
    else if (log2N === 4)
      $this.dft_1 = new CDFTsr16(0, 1, 0);
    else if (log2N >= 5) {
      $this.dft_1 = CDFTsr_init_$Create$(log2N, _get_c__7mloi6($this), _get_c3__ndbxi3($this), _get_s__7mlovy($this), _get_s3__ndc9d7($this));
    } else
      throw IllegalArgumentException_init_$Create$('unknown log2N size, must be >=3 but was: ' + log2N);
    return $this;
  }
  function CDFT_ofLogSize(log2N) {
    return CDFT_init_$Init$(log2N, Object.create(CDFT.prototype));
  }
  function CDFT_init_$Init$_0(xr, xi, yr, yi, log2N, $this) {
    CDFT_init_$Init$(log2N, $this);
    $this.yr_1 = yr;
    $this.yi_1 = yi;
    $this.dft_1.link(xr, xi, yr, yi);
    $this.arraysUnlinked_1 = false;
    return $this;
  }
  function CDFT_ofArrays(xr, xi, yr, yi, log2N) {
    return CDFT_init_$Init$_0(xr, xi, yr, yi, log2N, Object.create(CDFT.prototype));
  }
  function createTable($this) {
    var N8 = $this.N_1 / 8 | 0;
    $this.c_1 = new Float32Array(N8);
    $this.c3__1 = new Float32Array(N8);
    $this.s_1 = new Float32Array(N8);
    $this.s3__1 = new Float32Array(N8);
    var inductionVariable = 0;
    var last = N8 - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = _get_c__7mloi6($this);
        var tmp$ret$0;
        // Inline function 'kotlin.math.cos' call
        var tmp0_cos = 2.0 * get_PI() * i / $this.N_1;
        tmp$ret$0 = Math.cos(tmp0_cos);
        tmp[i] = tmp$ret$0;
        var tmp_0 = _get_c3__ndbxi3($this);
        var tmp$ret$1;
        // Inline function 'kotlin.math.cos' call
        var tmp1_cos = 2.0 * get_PI() * 3.0 * i / $this.N_1;
        tmp$ret$1 = Math.cos(tmp1_cos);
        tmp_0[i] = tmp$ret$1;
        var tmp_1 = _get_s__7mlovy($this);
        var tmp$ret$2;
        // Inline function 'kotlin.math.sin' call
        var tmp2_sin = 2.0 * get_PI() * i / $this.N_1;
        tmp$ret$2 = Math.sin(tmp2_sin);
        tmp_1[i] = -tmp$ret$2;
        var tmp_2 = _get_s3__ndc9d7($this);
        var tmp$ret$3;
        // Inline function 'kotlin.math.sin' call
        var tmp3_sin = 2.0 * get_PI() * 3.0 * i / $this.N_1;
        tmp$ret$3 = Math.sin(tmp3_sin);
        tmp_2[i] = -tmp$ret$3;
      }
       while (!(i === last));
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.prototype.dftProduct = function (Xr, Xi, Yr, Yi, sign) {
    if ((!(Xr.length === Yr.length) ? true : !(Xi.length === Yi.length)) ? true : !(Xr.length === Xi.length))
      throw IllegalArgumentException_init_$Create$('Transform array lengths are not equal');
    var tmp;
    var inductionVariable = 0;
    var last = Xr.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        tmp = Xr[i] * Yr[i] - sign * Xi[i] * Yi[i];
        Yi[i] = Xr[i] * Yi[i] + sign * Xi[i] * Yr[i];
        Yr[i] = tmp;
      }
       while (inductionVariable <= last);
  };
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  CDFT.prototype.get_N_1mhr51_k$ = function () {
    return this.N_1;
  };
  CDFT.prototype.get_log2N_ius8zb_k$ = function () {
    return this.log2N_1;
  };
  CDFT.prototype.evaluateCDFT = function (xr, xi, Xr, Xi) {
    this.yr_1 = Xr;
    this.yi_1 = Xi;
    this.dft_1.link(xr, xi, Xr, Xi);
    this.arraysUnlinked_1 = false;
    this.dft_1.evaluate_de95qg_k$();
  };
  CDFT.prototype.evaluateInverseCDFT = function (Xr, Xi, xr, xi) {
    this.yr_1 = xr;
    this.yi_1 = xi;
    this.dft_1.link(Xr, Xi, xr, xi);
    this.arraysUnlinked_1 = false;
    this.evaluateInverse();
  };
  CDFT.prototype.evaluate = function () {
    if (this.arraysUnlinked_1)
      throw IllegalStateException_init_$Create$('Sequence and transform arrays are not linked');
    this.dft_1.evaluate_de95qg_k$();
  };
  CDFT.prototype.evaluateInverse = function () {
    if (this.arraysUnlinked_1)
      throw IllegalStateException_init_$Create$('Sequence and transform arrays are not linked');
    this.dft_1.evaluate_de95qg_k$();
    var scale = 1.0 / this.N_1;
    var N2 = this.N_1 / 2 | 0;
    var tmp0_array = _get_yr__ndcfbm(this);
    var tmp1_index0 = 0;
    tmp0_array[tmp1_index0] = tmp0_array[tmp1_index0] * scale;
    var tmp2_array = _get_yi__ndcf3v(this);
    var tmp3_index0 = 0;
    tmp2_array[tmp3_index0] = tmp2_array[tmp3_index0] * scale;
    var tmp4_array = _get_yr__ndcfbm(this);
    var tmp5_index0 = N2;
    tmp4_array[tmp5_index0] = tmp4_array[tmp5_index0] * scale;
    var tmp6_array = _get_yi__ndcf3v(this);
    var tmp7_index0 = N2;
    tmp6_array[tmp7_index0] = tmp6_array[tmp7_index0] * scale;
    var i = 1;
    var j = this.N_1 - 1 | 0;
    var tmp;
    while (i < j) {
      tmp = _get_yr__ndcfbm(this)[i];
      _get_yr__ndcfbm(this)[i] = _get_yr__ndcfbm(this)[j] * scale;
      _get_yr__ndcfbm(this)[j] = tmp * scale;
      tmp = _get_yi__ndcf3v(this)[i];
      _get_yi__ndcf3v(this)[i] = _get_yi__ndcf3v(this)[j] * scale;
      _get_yi__ndcf3v(this)[j] = tmp * scale;
      var tmp8 = i;
      i = tmp8 + 1 | 0;
      var tmp9 = j;
      j = tmp9 - 1 | 0;
    }
  };
  function CDFT() {
    Companion_getInstance_0();
    this.arraysUnlinked_1 = false;
  }
  CDFT.$metadata$ = classMeta('CDFT');
  function _get_SQRT2BY2__e8870e($this) {
    return $this.SQRT2BY2__1;
  }
  function _set_dft1__9lli48($this, _set____db54di) {
    $this.dft1__1 = _set____db54di;
  }
  function _get_dft1__d5dhpo($this) {
    return $this.dft1__1;
  }
  function _set_dft2__9lli53($this, _set____db54di) {
    $this.dft2__1 = _set____db54di;
  }
  function _get_dft2__d5dhqj($this) {
    return $this.dft2__1;
  }
  function _set_dft3__9lli5y($this, _set____db54di) {
    $this.dft3__1 = _set____db54di;
  }
  function _get_dft3__d5dhre($this) {
    return $this.dft3__1;
  }
  function _set_c__db558i_0($this, _set____db54di) {
    $this.c_1 = _set____db54di;
  }
  function _get_c__7mloi6_0($this) {
    return $this.c_1;
  }
  function _set_c3__dl8tqx_0($this, _set____db54di) {
    $this.c3__1 = _set____db54di;
  }
  function _get_c3__ndbxi3_0($this) {
    return $this.c3__1;
  }
  function _set_s__db55ma_0($this, _set____db54di) {
    $this.s_1 = _set____db54di;
  }
  function _get_s__7mlovy_0($this) {
    return $this.s_1;
  }
  function _set_s3__dl8hvt_0($this, _set____db54di) {
    $this.s3__1 = _set____db54di;
  }
  function _get_s3__ndc9d7_0($this) {
    return $this.s3__1;
  }
  function _set_f__db55b3($this, _set____db54di) {
    $this.f_1 = _set____db54di;
  }
  function _get_f__7mlokr($this) {
    return $this.f_1;
  }
  function _set_reflect__m3p5lk($this, _set____db54di) {
    $this.reflect_1 = _set____db54di;
  }
  function _get_reflect__nb6m0k($this) {
    return $this.reflect_1;
  }
  function CDFTsr_init_$Init$(m, c, c3, s, s3, $this) {
    CDFTsr.call($this);
    $this.m_1 = m;
    $this.N_1 = 1 << m;
    $this.Ndiv8__1 = $this.N_1 / 8 | 0;
    $this.Ndiv4__1 = $this.N_1 / 4 | 0;
    $this.xoffset_1 = 0;
    $this.xstride_1 = 1;
    $this.outXoffset_1 = 0;
    $this.c_1 = c;
    $this.c3__1 = c3;
    $this.s_1 = s;
    $this.s3__1 = s3;
    $this.f_1 = 1;
    $this.reflect_1 = imul(2, c.length);
    if (m > 6) {
      $this.dft1__1 = CDFTsr_init_$Create$_1($this, 0, 2, 0, m - 1 | 0);
      $this.dft2__1 = CDFTsr_init_$Create$_1($this, 1, 4, $this.N_1 / 2 | 0, m - 2 | 0);
      $this.dft3__1 = CDFTsr_init_$Create$_1($this, 3, 4, imul(3, $this.N_1) / 4 | 0, m - 2 | 0);
    } else if (m === 6) {
      $this.dft1__1 = CDFTsr_init_$Create$_1($this, 0, 2, 0, 5);
      $this.dft2__1 = new CDFTsr16(1, 4, $this.N_1 / 2 | 0);
      $this.dft3__1 = new CDFTsr16(3, 4, imul(3, $this.N_1) / 4 | 0);
    } else if (m === 5) {
      $this.dft1__1 = new CDFTsr16(0, 2, 0);
      $this.dft2__1 = new CDFTsr8(1, 4, $this.N_1 / 2 | 0);
      $this.dft3__1 = new CDFTsr8(3, 4, imul(3, $this.N_1) / 4 | 0);
    }
    return $this;
  }
  function CDFTsr_init_$Create$(m, c, c3, s, s3) {
    return CDFTsr_init_$Init$(m, c, c3, s, s3, Object.create(CDFTsr.prototype));
  }
  function CDFTsr_init_$Init$_0($this) {
    CDFTsr.call($this);
    $this.dft1__1 = null;
    $this.dft2__1 = null;
    $this.dft3__1 = null;
    return $this;
  }
  function CDFTsr_init_$Create$_0() {
    return CDFTsr_init_$Init$_0(Object.create(CDFTsr.prototype));
  }
  function CDFTsr_init_$Init$_1(parent, dataOffset, dataStride, transformOffset, m, $this) {
    CDFTsr.call($this);
    $this.c_1 = parent.c_1;
    $this.c3__1 = parent.c3__1;
    $this.s_1 = parent.s_1;
    $this.s3__1 = parent.s3__1;
    $this.m_1 = m;
    $this.N_1 = 1 << m;
    $this.Ndiv8__1 = $this.N_1 / 8 | 0;
    $this.Ndiv4__1 = $this.N_1 / 4 | 0;
    $this.xoffset_1 = dataOffset;
    $this.xstride_1 = dataStride;
    $this.outXoffset_1 = transformOffset;
    $this.f_1 = ensureNotNull($this.c_1).length / $this.Ndiv8__1 | 0;
    $this.reflect_1 = imul(2, ensureNotNull($this.c_1).length);
    if (m > 6) {
      $this.dft1__1 = CDFTsr_init_$Create$_1($this, dataOffset, imul(dataStride, 2), transformOffset, m - 1 | 0);
      $this.dft2__1 = CDFTsr_init_$Create$_1($this, dataOffset + dataStride | 0, imul(dataStride, 4), transformOffset + ($this.N_1 / 2 | 0) | 0, m - 2 | 0);
      $this.dft3__1 = CDFTsr_init_$Create$_1($this, dataOffset + imul(3, dataStride) | 0, imul(dataStride, 4), transformOffset + (imul(3, $this.N_1) / 4 | 0) | 0, m - 2 | 0);
    } else if (m === 6) {
      $this.dft1__1 = CDFTsr_init_$Create$_1($this, dataOffset, imul(dataStride, 2), transformOffset, 5);
      $this.dft2__1 = new CDFTsr16(dataOffset + dataStride | 0, imul(dataStride, 4), transformOffset + ($this.N_1 / 2 | 0) | 0);
      $this.dft3__1 = new CDFTsr16(dataOffset + imul(3, dataStride) | 0, imul(dataStride, 4), transformOffset + (imul(3, $this.N_1) / 4 | 0) | 0);
    } else if (m === 5) {
      $this.dft1__1 = new CDFTsr16(dataOffset, imul(dataStride, 2), transformOffset);
      $this.dft2__1 = new CDFTsr8(dataOffset + dataStride | 0, imul(dataStride, 4), transformOffset + ($this.N_1 / 2 | 0) | 0);
      $this.dft3__1 = new CDFTsr8(dataOffset + imul(3, dataStride) | 0, imul(dataStride, 4), transformOffset + (imul(3, $this.N_1) / 4 | 0) | 0);
    }
    return $this;
  }
  function CDFTsr_init_$Create$_1(parent, dataOffset, dataStride, transformOffset, m) {
    return CDFTsr_init_$Init$_1(parent, dataOffset, dataStride, transformOffset, m, Object.create(CDFTsr.prototype));
  }
  function Companion_1() {
    Companion_instance_1 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.math.sqrt' call
    tmp$ret$0 = Math.sqrt(2.0);
    tmp.SQRT2BY2__1 = tmp$ret$0 / 2.0;
  }
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  CDFTsr.prototype.set_xr_n8tm33_k$ = function (_set____db54di) {
    this.xr_1 = _set____db54di;
  };
  CDFTsr.prototype.get_xr_kntnjx_k$ = function () {
    var tmp = this.xr_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('xr');
    }
  };
  CDFTsr.prototype.set_xi_41v7l4_k$ = function (_set____db54di) {
    this.xi_1 = _set____db54di;
  };
  CDFTsr.prototype.get_xi_kntnk6_k$ = function () {
    var tmp = this.xi_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('xi');
    }
  };
  CDFTsr.prototype.set_outXr_dvcqpn_k$ = function (_set____db54di) {
    this.outXr_1 = _set____db54di;
  };
  CDFTsr.prototype.get_outXr_iwjr9b_k$ = function () {
    var tmp = this.outXr_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('outXr');
    }
  };
  CDFTsr.prototype.set_outXi_dfc2yk_k$ = function (_set____db54di) {
    this.outXi_1 = _set____db54di;
  };
  CDFTsr.prototype.get_outXi_iwjr92_k$ = function () {
    var tmp = this.outXi_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('outXi');
    }
  };
  CDFTsr.prototype.set_xoffset_bd3wle_k$ = function (_set____db54di) {
    this.xoffset_1 = _set____db54di;
  };
  CDFTsr.prototype.get_xoffset_u1srtq_k$ = function () {
    return this.xoffset_1;
  };
  CDFTsr.prototype.set_xstride_i6zsu4_k$ = function (_set____db54di) {
    this.xstride_1 = _set____db54di;
  };
  CDFTsr.prototype.get_xstride_rxppjs_k$ = function () {
    return this.xstride_1;
  };
  CDFTsr.prototype.set_outXoffset_dyl9jq_k$ = function (_set____db54di) {
    this.outXoffset_1 = _set____db54di;
  };
  CDFTsr.prototype.get_outXoffset_tmu2xy_k$ = function () {
    return this.outXoffset_1;
  };
  CDFTsr.prototype.set_m_669hr4_k$ = function (_set____db54di) {
    this.m_1 = _set____db54di;
  };
  CDFTsr.prototype.get_m_1mhr5w_k$ = function () {
    return this.m_1;
  };
  CDFTsr.prototype.set_N_hmx2g1_k$ = function (_set____db54di) {
    this.N_1 = _set____db54di;
  };
  CDFTsr.prototype.get_N_1mhr51_k$ = function () {
    return this.N_1;
  };
  CDFTsr.prototype.set_Ndiv8_bunsfs_k$ = function (_set____db54di) {
    this.Ndiv8__1 = _set____db54di;
  };
  CDFTsr.prototype.get_Ndiv8_ie3hf0_k$ = function () {
    return this.Ndiv8__1;
  };
  CDFTsr.prototype.set_Ndiv4_spbccc_k$ = function (_set____db54di) {
    this.Ndiv4__1 = _set____db54di;
  };
  CDFTsr.prototype.get_Ndiv4_ie3hew_k$ = function () {
    return this.Ndiv4__1;
  };
  CDFTsr.prototype.link = function (xr, xi, Xr, Xi) {
    this.xr_1 = xr;
    this.xi_1 = xi;
    this.outXr_1 = Xr;
    this.outXi_1 = Xi;
    ensureNotNull(this.dft1__1).link(xr, xi, Xr, Xi);
    ensureNotNull(this.dft2__1).link(xr, xi, Xr, Xi);
    ensureNotNull(this.dft3__1).link(xr, xi, Xr, Xi);
  };
  CDFTsr.prototype.evaluate_de95qg_k$ = function () {
    var T1r;
    var T1i;
    var T3r;
    var T3i;
    var Rr;
    var Ri;
    var Sr;
    var Si;
    var Wr;
    var Wi;
    ensureNotNull(this.dft1__1).evaluate_de95qg_k$();
    ensureNotNull(this.dft2__1).evaluate_de95qg_k$();
    ensureNotNull(this.dft3__1).evaluate_de95qg_k$();
    var kp = this.outXoffset_1;
    var kpN4 = kp + this.Ndiv4__1 | 0;
    var kpN2 = kpN4 + this.Ndiv4__1 | 0;
    var kp3N4 = kpN2 + this.Ndiv4__1 | 0;
    Rr = this.get_outXr_iwjr9b_k$()[kpN2] + this.get_outXr_iwjr9b_k$()[kp3N4];
    Ri = this.get_outXi_iwjr92_k$()[kpN2] + this.get_outXi_iwjr92_k$()[kp3N4];
    Sr = this.get_outXi_iwjr92_k$()[kp3N4] - this.get_outXi_iwjr92_k$()[kpN2];
    Si = this.get_outXr_iwjr9b_k$()[kpN2] - this.get_outXr_iwjr9b_k$()[kp3N4];
    this.get_outXr_iwjr9b_k$()[kpN2] = this.get_outXr_iwjr9b_k$()[kp] - Rr;
    this.get_outXi_iwjr92_k$()[kpN2] = this.get_outXi_iwjr92_k$()[kp] - Ri;
    this.get_outXr_iwjr9b_k$()[kp3N4] = this.get_outXr_iwjr9b_k$()[kpN4] + Sr;
    this.get_outXi_iwjr92_k$()[kp3N4] = this.get_outXi_iwjr92_k$()[kpN4] + Si;
    var tmp0_array = this.get_outXr_iwjr9b_k$();
    var tmp1_index0 = kp;
    tmp0_array[tmp1_index0] = tmp0_array[tmp1_index0] + Rr;
    var tmp2_array = this.get_outXi_iwjr92_k$();
    var tmp3_index0 = kp;
    tmp2_array[tmp3_index0] = tmp2_array[tmp3_index0] + Ri;
    var tmp4_array = this.get_outXr_iwjr9b_k$();
    var tmp5_index0 = kpN4;
    tmp4_array[tmp5_index0] = tmp4_array[tmp5_index0] - Sr;
    var tmp6_array = this.get_outXi_iwjr92_k$();
    var tmp7_index0 = kpN4;
    tmp6_array[tmp7_index0] = tmp6_array[tmp7_index0] - Si;
    var fk;
    var inductionVariable = 1;
    var last = this.Ndiv8__1 - 1 | 0;
    if (inductionVariable <= last)
      do {
        var k = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        fk = imul(this.f_1, k);
        kp = k + this.outXoffset_1 | 0;
        kpN4 = kp + this.Ndiv4__1 | 0;
        kpN2 = kpN4 + this.Ndiv4__1 | 0;
        kp3N4 = kpN2 + this.Ndiv4__1 | 0;
        Wr = ensureNotNull(this.c_1)[fk];
        Wi = ensureNotNull(this.s_1)[fk];
        T1r = Wr * this.get_outXr_iwjr9b_k$()[kpN2] - Wi * this.get_outXi_iwjr92_k$()[kpN2];
        T1i = Wr * this.get_outXi_iwjr92_k$()[kpN2] + Wi * this.get_outXr_iwjr9b_k$()[kpN2];
        Wr = ensureNotNull(this.c3__1)[fk];
        Wi = ensureNotNull(this.s3__1)[fk];
        T3r = Wr * this.get_outXr_iwjr9b_k$()[kp3N4] - Wi * this.get_outXi_iwjr92_k$()[kp3N4];
        T3i = Wr * this.get_outXi_iwjr92_k$()[kp3N4] + Wi * this.get_outXr_iwjr9b_k$()[kp3N4];
        Rr = T1r + T3r;
        Ri = T1i + T3i;
        Sr = T3i - T1i;
        Si = T1r - T3r;
        this.get_outXr_iwjr9b_k$()[kpN2] = this.get_outXr_iwjr9b_k$()[kp] - Rr;
        this.get_outXi_iwjr92_k$()[kpN2] = this.get_outXi_iwjr92_k$()[kp] - Ri;
        this.get_outXr_iwjr9b_k$()[kp3N4] = this.get_outXr_iwjr9b_k$()[kpN4] + Sr;
        this.get_outXi_iwjr92_k$()[kp3N4] = this.get_outXi_iwjr92_k$()[kpN4] + Si;
        var tmp9_array = this.get_outXr_iwjr9b_k$();
        var tmp10_index0 = kp;
        tmp9_array[tmp10_index0] = tmp9_array[tmp10_index0] + Rr;
        var tmp11_array = this.get_outXi_iwjr92_k$();
        var tmp12_index0 = kp;
        tmp11_array[tmp12_index0] = tmp11_array[tmp12_index0] + Ri;
        var tmp13_array = this.get_outXr_iwjr9b_k$();
        var tmp14_index0 = kpN4;
        tmp13_array[tmp14_index0] = tmp13_array[tmp14_index0] - Sr;
        var tmp15_array = this.get_outXi_iwjr92_k$();
        var tmp16_index0 = kpN4;
        tmp15_array[tmp16_index0] = tmp15_array[tmp16_index0] - Si;
      }
       while (!(k === last));
    kp = this.Ndiv8__1 + this.outXoffset_1 | 0;
    kpN4 = kp + this.Ndiv4__1 | 0;
    kpN2 = kpN4 + this.Ndiv4__1 | 0;
    kp3N4 = kpN2 + this.Ndiv4__1 | 0;
    T1r = Companion_getInstance_1().SQRT2BY2__1 * (this.get_outXr_iwjr9b_k$()[kpN2] + this.get_outXi_iwjr92_k$()[kpN2]);
    T1i = Companion_getInstance_1().SQRT2BY2__1 * (this.get_outXi_iwjr92_k$()[kpN2] - this.get_outXr_iwjr9b_k$()[kpN2]);
    T3r = Companion_getInstance_1().SQRT2BY2__1 * (this.get_outXi_iwjr92_k$()[kp3N4] - this.get_outXr_iwjr9b_k$()[kp3N4]);
    T3i = -Companion_getInstance_1().SQRT2BY2__1 * (this.get_outXi_iwjr92_k$()[kp3N4] + this.get_outXr_iwjr9b_k$()[kp3N4]);
    Rr = T1r + T3r;
    Ri = T1i + T3i;
    Sr = T3i - T1i;
    Si = T1r - T3r;
    this.get_outXr_iwjr9b_k$()[kpN2] = this.get_outXr_iwjr9b_k$()[kp] - Rr;
    this.get_outXi_iwjr92_k$()[kpN2] = this.get_outXi_iwjr92_k$()[kp] - Ri;
    this.get_outXr_iwjr9b_k$()[kp3N4] = this.get_outXr_iwjr9b_k$()[kpN4] + Sr;
    this.get_outXi_iwjr92_k$()[kp3N4] = this.get_outXi_iwjr92_k$()[kpN4] + Si;
    var tmp17_array = this.get_outXr_iwjr9b_k$();
    var tmp18_index0 = kp;
    tmp17_array[tmp18_index0] = tmp17_array[tmp18_index0] + Rr;
    var tmp19_array = this.get_outXi_iwjr92_k$();
    var tmp20_index0 = kp;
    tmp19_array[tmp20_index0] = tmp19_array[tmp20_index0] + Ri;
    var tmp21_array = this.get_outXr_iwjr9b_k$();
    var tmp22_index0 = kpN4;
    tmp21_array[tmp22_index0] = tmp21_array[tmp22_index0] - Sr;
    var tmp23_array = this.get_outXi_iwjr92_k$();
    var tmp24_index0 = kpN4;
    tmp23_array[tmp24_index0] = tmp23_array[tmp24_index0] - Si;
    var inductionVariable_0 = this.Ndiv8__1 + 1 | 0;
    var last_0 = this.Ndiv4__1 - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var k_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        fk = this.reflect_1 - imul(this.f_1, k_0) | 0;
        kp = k_0 + this.outXoffset_1 | 0;
        kpN4 = kp + this.Ndiv4__1 | 0;
        kpN2 = kpN4 + this.Ndiv4__1 | 0;
        kp3N4 = kpN2 + this.Ndiv4__1 | 0;
        Wr = -ensureNotNull(this.s_1)[fk];
        Wi = -ensureNotNull(this.c_1)[fk];
        T1r = Wr * this.get_outXr_iwjr9b_k$()[kpN2] - Wi * this.get_outXi_iwjr92_k$()[kpN2];
        T1i = Wr * this.get_outXi_iwjr92_k$()[kpN2] + Wi * this.get_outXr_iwjr9b_k$()[kpN2];
        Wr = ensureNotNull(this.s3__1)[fk];
        Wi = ensureNotNull(this.c3__1)[fk];
        T3r = Wr * this.get_outXr_iwjr9b_k$()[kp3N4] - Wi * this.get_outXi_iwjr92_k$()[kp3N4];
        T3i = Wr * this.get_outXi_iwjr92_k$()[kp3N4] + Wi * this.get_outXr_iwjr9b_k$()[kp3N4];
        Rr = T1r + T3r;
        Ri = T1i + T3i;
        Sr = T3i - T1i;
        Si = T1r - T3r;
        this.get_outXr_iwjr9b_k$()[kpN2] = this.get_outXr_iwjr9b_k$()[kp] - Rr;
        this.get_outXi_iwjr92_k$()[kpN2] = this.get_outXi_iwjr92_k$()[kp] - Ri;
        this.get_outXr_iwjr9b_k$()[kp3N4] = this.get_outXr_iwjr9b_k$()[kpN4] + Sr;
        this.get_outXi_iwjr92_k$()[kp3N4] = this.get_outXi_iwjr92_k$()[kpN4] + Si;
        var tmp26_array = this.get_outXr_iwjr9b_k$();
        var tmp27_index0 = kp;
        tmp26_array[tmp27_index0] = tmp26_array[tmp27_index0] + Rr;
        var tmp28_array = this.get_outXi_iwjr92_k$();
        var tmp29_index0 = kp;
        tmp28_array[tmp29_index0] = tmp28_array[tmp29_index0] + Ri;
        var tmp30_array = this.get_outXr_iwjr9b_k$();
        var tmp31_index0 = kpN4;
        tmp30_array[tmp31_index0] = tmp30_array[tmp31_index0] - Sr;
        var tmp32_array = this.get_outXi_iwjr92_k$();
        var tmp33_index0 = kpN4;
        tmp32_array[tmp33_index0] = tmp32_array[tmp33_index0] - Si;
      }
       while (!(k_0 === last_0));
  };
  function CDFTsr() {
    Companion_getInstance_1();
    this.xoffset_1 = 0;
    this.xstride_1 = 0;
    this.outXoffset_1 = 0;
    this.m_1 = 0;
    this.N_1 = 0;
    this.Ndiv8__1 = 0;
    this.Ndiv4__1 = 0;
    this.dft1__1 = null;
    this.dft2__1 = null;
    this.dft3__1 = null;
    this.c_1 = null;
    this.c3__1 = null;
    this.s_1 = null;
    this.s3__1 = null;
    this.f_1 = 0;
    this.reflect_1 = 0;
  }
  CDFTsr.$metadata$ = classMeta('CDFTsr');
  function _get_n0__ndc5l5($this) {
    return $this.n0__1;
  }
  function _get_n1__ndc5m0($this) {
    return $this.n1__1;
  }
  function _get_n2__ndc5mv($this) {
    return $this.n2__1;
  }
  function _get_n3__ndc5nq($this) {
    return $this.n3__1;
  }
  function _get_n4__ndc5ol($this) {
    return $this.n4__1;
  }
  function _get_n5__ndc5pg($this) {
    return $this.n5__1;
  }
  function _get_n6__ndc5qb($this) {
    return $this.n6__1;
  }
  function _get_n7__ndc5r6($this) {
    return $this.n7__1;
  }
  function _get_n8__ndc5s1($this) {
    return $this.n8__1;
  }
  function _get_n9__ndc5sw($this) {
    return $this.n9__1;
  }
  function _get_n10__e6c9wk($this) {
    return $this.n10__1;
  }
  function _get_n11__e6c9xf($this) {
    return $this.n11__1;
  }
  function _get_n12__e6c9ya($this) {
    return $this.n12__1;
  }
  function _get_n13__e6c9z5($this) {
    return $this.n13__1;
  }
  function _get_n14__e6ca00($this) {
    return $this.n14__1;
  }
  function _get_n15__e6ca0v($this) {
    return $this.n15__1;
  }
  function _get_m0__ndc4ug($this) {
    return $this.m0__1;
  }
  function _get_m1__ndc4vb($this) {
    return $this.m1__1;
  }
  function _get_m2__ndc4w6($this) {
    return $this.m2__1;
  }
  function _get_m3__ndc4x1($this) {
    return $this.m3__1;
  }
  function _get_m4__ndc4xw($this) {
    return $this.m4__1;
  }
  function _get_m5__ndc4yr($this) {
    return $this.m5__1;
  }
  function _get_m6__ndc4zm($this) {
    return $this.m6__1;
  }
  function _get_m7__ndc50h($this) {
    return $this.m7__1;
  }
  function _get_m8__ndc51c($this) {
    return $this.m8__1;
  }
  function _get_m9__ndc527($this) {
    return $this.m9__1;
  }
  function _get_m10__e6bmx1($this) {
    return $this.m10__1;
  }
  function _get_m11__e6bmxw($this) {
    return $this.m11__1;
  }
  function _get_m12__e6bmyr($this) {
    return $this.m12__1;
  }
  function _get_m13__e6bmzm($this) {
    return $this.m13__1;
  }
  function _get_m14__e6bn0h($this) {
    return $this.m14__1;
  }
  function _get_m15__e6bn1c($this) {
    return $this.m15__1;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.math.cos' call
    var tmp0_cos = 2.0 * get_PI() / 16;
    tmp$ret$0 = Math.cos(tmp0_cos);
    tmp.C_1_16__1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.math.cos' call
    var tmp0_cos_0 = 2.0 * get_PI() * 3.0 / 16;
    tmp$ret$1 = Math.cos(tmp0_cos_0);
    tmp_0.C_3_16__1 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.math.sqrt' call
    tmp$ret$2 = Math.sqrt(2.0);
    tmp_1.SQRT2BY2__1 = tmp$ret$2 / 2.0;
  }
  Companion_2.prototype.get_C_1_16_3f5hmw_k$ = function () {
    return this.C_1_16__1;
  };
  Companion_2.prototype.get_C_3_16_3f47nu_k$ = function () {
    return this.C_3_16__1;
  };
  Companion_2.prototype.get_SQRT2BY2_x1x4ni_k$ = function () {
    return this.SQRT2BY2__1;
  };
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function CDFTsr16(dataOffset, dataStride, transformOffset) {
    Companion_getInstance_2();
    CDFTsr_init_$Init$_0(this);
    this.m_1 = 4;
    this.N_1 = 16;
    this.xoffset_1 = dataOffset;
    this.xstride_1 = dataStride;
    this.outXoffset_1 = transformOffset;
    this.n0__1 = this.xoffset_1;
    this.n1__1 = this.n0__1 + this.xstride_1 | 0;
    this.n2__1 = this.n1__1 + this.xstride_1 | 0;
    this.n3__1 = this.n2__1 + this.xstride_1 | 0;
    this.n4__1 = this.n3__1 + this.xstride_1 | 0;
    this.n5__1 = this.n4__1 + this.xstride_1 | 0;
    this.n6__1 = this.n5__1 + this.xstride_1 | 0;
    this.n7__1 = this.n6__1 + this.xstride_1 | 0;
    this.n8__1 = this.n7__1 + this.xstride_1 | 0;
    this.n9__1 = this.n8__1 + this.xstride_1 | 0;
    this.n10__1 = this.n9__1 + this.xstride_1 | 0;
    this.n11__1 = this.n10__1 + this.xstride_1 | 0;
    this.n12__1 = this.n11__1 + this.xstride_1 | 0;
    this.n13__1 = this.n12__1 + this.xstride_1 | 0;
    this.n14__1 = this.n13__1 + this.xstride_1 | 0;
    this.n15__1 = this.n14__1 + this.xstride_1 | 0;
    this.m0__1 = this.outXoffset_1;
    this.m1__1 = this.m0__1 + 1 | 0;
    this.m2__1 = this.m1__1 + 1 | 0;
    this.m3__1 = this.m2__1 + 1 | 0;
    this.m4__1 = this.m3__1 + 1 | 0;
    this.m5__1 = this.m4__1 + 1 | 0;
    this.m6__1 = this.m5__1 + 1 | 0;
    this.m7__1 = this.m6__1 + 1 | 0;
    this.m8__1 = this.m7__1 + 1 | 0;
    this.m9__1 = this.m8__1 + 1 | 0;
    this.m10__1 = this.m9__1 + 1 | 0;
    this.m11__1 = this.m10__1 + 1 | 0;
    this.m12__1 = this.m11__1 + 1 | 0;
    this.m13__1 = this.m12__1 + 1 | 0;
    this.m14__1 = this.m13__1 + 1 | 0;
    this.m15__1 = this.m14__1 + 1 | 0;
  }
  CDFTsr16.prototype.link_unhtbf_k$ = function (xr, xi, Xr, Xi) {
    this.xr_1 = xr;
    this.xi_1 = xi;
    this.outXr_1 = Xr;
    this.outXi_1 = Xi;
  };
  CDFTsr16.prototype.link = function (xr, xi, Xr, Xi) {
    return this.link_unhtbf_k$(xr, xi, Xr, Xi);
  };
  CDFTsr16.prototype.evaluate_de95qg_k$ = function () {
    var T1r;
    var T1i;
    var T3r;
    var T3i;
    var Rr;
    var Ri;
    var Sr;
    var Si;
    this.get_outXr_iwjr9b_k$()[this.m0__1] = this.get_xr_kntnjx_k$()[this.n0__1] + this.get_xr_kntnjx_k$()[this.n8__1];
    this.get_outXi_iwjr92_k$()[this.m0__1] = this.get_xi_kntnk6_k$()[this.n0__1] + this.get_xi_kntnk6_k$()[this.n8__1];
    this.get_outXr_iwjr9b_k$()[this.m1__1] = this.get_xr_kntnjx_k$()[this.n0__1] - this.get_xr_kntnjx_k$()[this.n8__1];
    this.get_outXi_iwjr92_k$()[this.m1__1] = this.get_xi_kntnk6_k$()[this.n0__1] - this.get_xi_kntnk6_k$()[this.n8__1];
    Rr = this.get_xr_kntnjx_k$()[this.n4__1] + this.get_xr_kntnjx_k$()[this.n12__1];
    Ri = this.get_xi_kntnk6_k$()[this.n4__1] + this.get_xi_kntnk6_k$()[this.n12__1];
    Sr = this.get_xi_kntnk6_k$()[this.n12__1] - this.get_xi_kntnk6_k$()[this.n4__1];
    Si = this.get_xr_kntnjx_k$()[this.n4__1] - this.get_xr_kntnjx_k$()[this.n12__1];
    this.get_outXr_iwjr9b_k$()[this.m2__1] = this.get_outXr_iwjr9b_k$()[this.m0__1] - Rr;
    this.get_outXi_iwjr92_k$()[this.m2__1] = this.get_outXi_iwjr92_k$()[this.m0__1] - Ri;
    this.get_outXr_iwjr9b_k$()[this.m3__1] = this.get_outXr_iwjr9b_k$()[this.m1__1] + Sr;
    this.get_outXi_iwjr92_k$()[this.m3__1] = this.get_outXi_iwjr92_k$()[this.m1__1] + Si;
    var tmp0_array = this.get_outXr_iwjr9b_k$();
    var tmp1_index0 = this.m0__1;
    tmp0_array[tmp1_index0] = tmp0_array[tmp1_index0] + Rr;
    var tmp2_array = this.get_outXi_iwjr92_k$();
    var tmp3_index0 = this.m0__1;
    tmp2_array[tmp3_index0] = tmp2_array[tmp3_index0] + Ri;
    var tmp4_array = this.get_outXr_iwjr9b_k$();
    var tmp5_index0 = this.m1__1;
    tmp4_array[tmp5_index0] = tmp4_array[tmp5_index0] - Sr;
    var tmp6_array = this.get_outXi_iwjr92_k$();
    var tmp7_index0 = this.m1__1;
    tmp6_array[tmp7_index0] = tmp6_array[tmp7_index0] - Si;
    this.get_outXr_iwjr9b_k$()[this.m4__1] = this.get_xr_kntnjx_k$()[this.n2__1] + this.get_xr_kntnjx_k$()[this.n10__1];
    this.get_outXi_iwjr92_k$()[this.m4__1] = this.get_xi_kntnk6_k$()[this.n2__1] + this.get_xi_kntnk6_k$()[this.n10__1];
    this.get_outXr_iwjr9b_k$()[this.m5__1] = this.get_xr_kntnjx_k$()[this.n2__1] - this.get_xr_kntnjx_k$()[this.n10__1];
    this.get_outXi_iwjr92_k$()[this.m5__1] = this.get_xi_kntnk6_k$()[this.n2__1] - this.get_xi_kntnk6_k$()[this.n10__1];
    this.get_outXr_iwjr9b_k$()[this.m6__1] = this.get_xr_kntnjx_k$()[this.n6__1] + this.get_xr_kntnjx_k$()[this.n14__1];
    this.get_outXi_iwjr92_k$()[this.m6__1] = this.get_xi_kntnk6_k$()[this.n6__1] + this.get_xi_kntnk6_k$()[this.n14__1];
    this.get_outXr_iwjr9b_k$()[this.m7__1] = this.get_xr_kntnjx_k$()[this.n6__1] - this.get_xr_kntnjx_k$()[this.n14__1];
    this.get_outXi_iwjr92_k$()[this.m7__1] = this.get_xi_kntnk6_k$()[this.n6__1] - this.get_xi_kntnk6_k$()[this.n14__1];
    Rr = this.get_outXr_iwjr9b_k$()[this.m4__1] + this.get_outXr_iwjr9b_k$()[this.m6__1];
    Ri = this.get_outXi_iwjr92_k$()[this.m4__1] + this.get_outXi_iwjr92_k$()[this.m6__1];
    Sr = this.get_outXi_iwjr92_k$()[this.m6__1] - this.get_outXi_iwjr92_k$()[this.m4__1];
    Si = this.get_outXr_iwjr9b_k$()[this.m4__1] - this.get_outXr_iwjr9b_k$()[this.m6__1];
    this.get_outXr_iwjr9b_k$()[this.m4__1] = this.get_outXr_iwjr9b_k$()[this.m0__1] - Rr;
    this.get_outXi_iwjr92_k$()[this.m4__1] = this.get_outXi_iwjr92_k$()[this.m0__1] - Ri;
    this.get_outXr_iwjr9b_k$()[this.m6__1] = this.get_outXr_iwjr9b_k$()[this.m2__1] + Sr;
    this.get_outXi_iwjr92_k$()[this.m6__1] = this.get_outXi_iwjr92_k$()[this.m2__1] + Si;
    var tmp8_array = this.get_outXr_iwjr9b_k$();
    var tmp9_index0 = this.m0__1;
    tmp8_array[tmp9_index0] = tmp8_array[tmp9_index0] + Rr;
    var tmp10_array = this.get_outXi_iwjr92_k$();
    var tmp11_index0 = this.m0__1;
    tmp10_array[tmp11_index0] = tmp10_array[tmp11_index0] + Ri;
    var tmp12_array = this.get_outXr_iwjr9b_k$();
    var tmp13_index0 = this.m2__1;
    tmp12_array[tmp13_index0] = tmp12_array[tmp13_index0] - Sr;
    var tmp14_array = this.get_outXi_iwjr92_k$();
    var tmp15_index0 = this.m2__1;
    tmp14_array[tmp15_index0] = tmp14_array[tmp15_index0] - Si;
    T1r = Companion_getInstance_2().SQRT2BY2__1 * (this.get_outXr_iwjr9b_k$()[this.m5__1] + this.get_outXi_iwjr92_k$()[this.m5__1]);
    T1i = Companion_getInstance_2().SQRT2BY2__1 * (this.get_outXi_iwjr92_k$()[this.m5__1] - this.get_outXr_iwjr9b_k$()[this.m5__1]);
    T3r = Companion_getInstance_2().SQRT2BY2__1 * (this.get_outXi_iwjr92_k$()[this.m7__1] - this.get_outXr_iwjr9b_k$()[this.m7__1]);
    T3i = -Companion_getInstance_2().SQRT2BY2__1 * (this.get_outXi_iwjr92_k$()[this.m7__1] + this.get_outXr_iwjr9b_k$()[this.m7__1]);
    Rr = T1r + T3r;
    Ri = T1i + T3i;
    Sr = T3i - T1i;
    Si = T1r - T3r;
    this.get_outXr_iwjr9b_k$()[this.m5__1] = this.get_outXr_iwjr9b_k$()[this.m1__1] - Rr;
    this.get_outXi_iwjr92_k$()[this.m5__1] = this.get_outXi_iwjr92_k$()[this.m1__1] - Ri;
    this.get_outXr_iwjr9b_k$()[this.m7__1] = this.get_outXr_iwjr9b_k$()[this.m3__1] + Sr;
    this.get_outXi_iwjr92_k$()[this.m7__1] = this.get_outXi_iwjr92_k$()[this.m3__1] + Si;
    var tmp16_array = this.get_outXr_iwjr9b_k$();
    var tmp17_index0 = this.m1__1;
    tmp16_array[tmp17_index0] = tmp16_array[tmp17_index0] + Rr;
    var tmp18_array = this.get_outXi_iwjr92_k$();
    var tmp19_index0 = this.m1__1;
    tmp18_array[tmp19_index0] = tmp18_array[tmp19_index0] + Ri;
    var tmp20_array = this.get_outXr_iwjr9b_k$();
    var tmp21_index0 = this.m3__1;
    tmp20_array[tmp21_index0] = tmp20_array[tmp21_index0] - Sr;
    var tmp22_array = this.get_outXi_iwjr92_k$();
    var tmp23_index0 = this.m3__1;
    tmp22_array[tmp23_index0] = tmp22_array[tmp23_index0] - Si;
    this.get_outXr_iwjr9b_k$()[this.m8__1] = this.get_xr_kntnjx_k$()[this.n1__1] + this.get_xr_kntnjx_k$()[this.n9__1];
    this.get_outXi_iwjr92_k$()[this.m8__1] = this.get_xi_kntnk6_k$()[this.n1__1] + this.get_xi_kntnk6_k$()[this.n9__1];
    this.get_outXr_iwjr9b_k$()[this.m9__1] = this.get_xr_kntnjx_k$()[this.n1__1] - this.get_xr_kntnjx_k$()[this.n9__1];
    this.get_outXi_iwjr92_k$()[this.m9__1] = this.get_xi_kntnk6_k$()[this.n1__1] - this.get_xi_kntnk6_k$()[this.n9__1];
    Rr = this.get_xr_kntnjx_k$()[this.n5__1] + this.get_xr_kntnjx_k$()[this.n13__1];
    Ri = this.get_xi_kntnk6_k$()[this.n5__1] + this.get_xi_kntnk6_k$()[this.n13__1];
    Sr = this.get_xi_kntnk6_k$()[this.n13__1] - this.get_xi_kntnk6_k$()[this.n5__1];
    Si = this.get_xr_kntnjx_k$()[this.n5__1] - this.get_xr_kntnjx_k$()[this.n13__1];
    this.get_outXr_iwjr9b_k$()[this.m10__1] = this.get_outXr_iwjr9b_k$()[this.m8__1] - Rr;
    this.get_outXi_iwjr92_k$()[this.m10__1] = this.get_outXi_iwjr92_k$()[this.m8__1] - Ri;
    this.get_outXr_iwjr9b_k$()[this.m11__1] = this.get_outXr_iwjr9b_k$()[this.m9__1] + Sr;
    this.get_outXi_iwjr92_k$()[this.m11__1] = this.get_outXi_iwjr92_k$()[this.m9__1] + Si;
    var tmp24_array = this.get_outXr_iwjr9b_k$();
    var tmp25_index0 = this.m8__1;
    tmp24_array[tmp25_index0] = tmp24_array[tmp25_index0] + Rr;
    var tmp26_array = this.get_outXi_iwjr92_k$();
    var tmp27_index0 = this.m8__1;
    tmp26_array[tmp27_index0] = tmp26_array[tmp27_index0] + Ri;
    var tmp28_array = this.get_outXr_iwjr9b_k$();
    var tmp29_index0 = this.m9__1;
    tmp28_array[tmp29_index0] = tmp28_array[tmp29_index0] - Sr;
    var tmp30_array = this.get_outXi_iwjr92_k$();
    var tmp31_index0 = this.m9__1;
    tmp30_array[tmp31_index0] = tmp30_array[tmp31_index0] - Si;
    this.get_outXr_iwjr9b_k$()[this.m12__1] = this.get_xr_kntnjx_k$()[this.n3__1] + this.get_xr_kntnjx_k$()[this.n11__1];
    this.get_outXi_iwjr92_k$()[this.m12__1] = this.get_xi_kntnk6_k$()[this.n3__1] + this.get_xi_kntnk6_k$()[this.n11__1];
    this.get_outXr_iwjr9b_k$()[this.m13__1] = this.get_xr_kntnjx_k$()[this.n3__1] - this.get_xr_kntnjx_k$()[this.n11__1];
    this.get_outXi_iwjr92_k$()[this.m13__1] = this.get_xi_kntnk6_k$()[this.n3__1] - this.get_xi_kntnk6_k$()[this.n11__1];
    Rr = this.get_xr_kntnjx_k$()[this.n7__1] + this.get_xr_kntnjx_k$()[this.n15__1];
    Ri = this.get_xi_kntnk6_k$()[this.n7__1] + this.get_xi_kntnk6_k$()[this.n15__1];
    Sr = this.get_xi_kntnk6_k$()[this.n15__1] - this.get_xi_kntnk6_k$()[this.n7__1];
    Si = this.get_xr_kntnjx_k$()[this.n7__1] - this.get_xr_kntnjx_k$()[this.n15__1];
    this.get_outXr_iwjr9b_k$()[this.m14__1] = this.get_outXr_iwjr9b_k$()[this.m12__1] - Rr;
    this.get_outXi_iwjr92_k$()[this.m14__1] = this.get_outXi_iwjr92_k$()[this.m12__1] - Ri;
    this.get_outXr_iwjr9b_k$()[this.m15__1] = this.get_outXr_iwjr9b_k$()[this.m13__1] + Sr;
    this.get_outXi_iwjr92_k$()[this.m15__1] = this.get_outXi_iwjr92_k$()[this.m13__1] + Si;
    var tmp32_array = this.get_outXr_iwjr9b_k$();
    var tmp33_index0 = this.m12__1;
    tmp32_array[tmp33_index0] = tmp32_array[tmp33_index0] + Rr;
    var tmp34_array = this.get_outXi_iwjr92_k$();
    var tmp35_index0 = this.m12__1;
    tmp34_array[tmp35_index0] = tmp34_array[tmp35_index0] + Ri;
    var tmp36_array = this.get_outXr_iwjr9b_k$();
    var tmp37_index0 = this.m13__1;
    tmp36_array[tmp37_index0] = tmp36_array[tmp37_index0] - Sr;
    var tmp38_array = this.get_outXi_iwjr92_k$();
    var tmp39_index0 = this.m13__1;
    tmp38_array[tmp39_index0] = tmp38_array[tmp39_index0] - Si;
    Rr = this.get_outXr_iwjr9b_k$()[this.m8__1] + this.get_outXr_iwjr9b_k$()[this.m12__1];
    Ri = this.get_outXi_iwjr92_k$()[this.m8__1] + this.get_outXi_iwjr92_k$()[this.m12__1];
    Sr = this.get_outXi_iwjr92_k$()[this.m12__1] - this.get_outXi_iwjr92_k$()[this.m8__1];
    Si = this.get_outXr_iwjr9b_k$()[this.m8__1] - this.get_outXr_iwjr9b_k$()[this.m12__1];
    this.get_outXr_iwjr9b_k$()[this.m8__1] = this.get_outXr_iwjr9b_k$()[this.m0__1] - Rr;
    this.get_outXi_iwjr92_k$()[this.m8__1] = this.get_outXi_iwjr92_k$()[this.m0__1] - Ri;
    this.get_outXr_iwjr9b_k$()[this.m12__1] = this.get_outXr_iwjr9b_k$()[this.m4__1] + Sr;
    this.get_outXi_iwjr92_k$()[this.m12__1] = this.get_outXi_iwjr92_k$()[this.m4__1] + Si;
    var tmp40_array = this.get_outXr_iwjr9b_k$();
    var tmp41_index0 = this.m0__1;
    tmp40_array[tmp41_index0] = tmp40_array[tmp41_index0] + Rr;
    var tmp42_array = this.get_outXi_iwjr92_k$();
    var tmp43_index0 = this.m0__1;
    tmp42_array[tmp43_index0] = tmp42_array[tmp43_index0] + Ri;
    var tmp44_array = this.get_outXr_iwjr9b_k$();
    var tmp45_index0 = this.m4__1;
    tmp44_array[tmp45_index0] = tmp44_array[tmp45_index0] - Sr;
    var tmp46_array = this.get_outXi_iwjr92_k$();
    var tmp47_index0 = this.m4__1;
    tmp46_array[tmp47_index0] = tmp46_array[tmp47_index0] - Si;
    T1r = Companion_getInstance_2().C_1_16__1 * this.get_outXr_iwjr9b_k$()[this.m9__1] + Companion_getInstance_2().C_3_16__1 * this.get_outXi_iwjr92_k$()[this.m9__1];
    T1i = Companion_getInstance_2().C_1_16__1 * this.get_outXi_iwjr92_k$()[this.m9__1] - Companion_getInstance_2().C_3_16__1 * this.get_outXr_iwjr9b_k$()[this.m9__1];
    T3r = Companion_getInstance_2().C_3_16__1 * this.get_outXr_iwjr9b_k$()[this.m13__1] + Companion_getInstance_2().C_1_16__1 * this.get_outXi_iwjr92_k$()[this.m13__1];
    T3i = Companion_getInstance_2().C_3_16__1 * this.get_outXi_iwjr92_k$()[this.m13__1] - Companion_getInstance_2().C_1_16__1 * this.get_outXr_iwjr9b_k$()[this.m13__1];
    Rr = T1r + T3r;
    Ri = T1i + T3i;
    Sr = T3i - T1i;
    Si = T1r - T3r;
    this.get_outXr_iwjr9b_k$()[this.m9__1] = this.get_outXr_iwjr9b_k$()[this.m1__1] - Rr;
    this.get_outXi_iwjr92_k$()[this.m9__1] = this.get_outXi_iwjr92_k$()[this.m1__1] - Ri;
    this.get_outXr_iwjr9b_k$()[this.m13__1] = this.get_outXr_iwjr9b_k$()[this.m5__1] + Sr;
    this.get_outXi_iwjr92_k$()[this.m13__1] = this.get_outXi_iwjr92_k$()[this.m5__1] + Si;
    var tmp48_array = this.get_outXr_iwjr9b_k$();
    var tmp49_index0 = this.m1__1;
    tmp48_array[tmp49_index0] = tmp48_array[tmp49_index0] + Rr;
    var tmp50_array = this.get_outXi_iwjr92_k$();
    var tmp51_index0 = this.m1__1;
    tmp50_array[tmp51_index0] = tmp50_array[tmp51_index0] + Ri;
    var tmp52_array = this.get_outXr_iwjr9b_k$();
    var tmp53_index0 = this.m5__1;
    tmp52_array[tmp53_index0] = tmp52_array[tmp53_index0] - Sr;
    var tmp54_array = this.get_outXi_iwjr92_k$();
    var tmp55_index0 = this.m5__1;
    tmp54_array[tmp55_index0] = tmp54_array[tmp55_index0] - Si;
    T1r = Companion_getInstance_2().SQRT2BY2__1 * (this.get_outXr_iwjr9b_k$()[this.m10__1] + this.get_outXi_iwjr92_k$()[this.m10__1]);
    T1i = Companion_getInstance_2().SQRT2BY2__1 * (this.get_outXi_iwjr92_k$()[this.m10__1] - this.get_outXr_iwjr9b_k$()[this.m10__1]);
    T3r = Companion_getInstance_2().SQRT2BY2__1 * (this.get_outXi_iwjr92_k$()[this.m14__1] - this.get_outXr_iwjr9b_k$()[this.m14__1]);
    T3i = -Companion_getInstance_2().SQRT2BY2__1 * (this.get_outXi_iwjr92_k$()[this.m14__1] + this.get_outXr_iwjr9b_k$()[this.m14__1]);
    Rr = T1r + T3r;
    Ri = T1i + T3i;
    Sr = T3i - T1i;
    Si = T1r - T3r;
    this.get_outXr_iwjr9b_k$()[this.m10__1] = this.get_outXr_iwjr9b_k$()[this.m2__1] - Rr;
    this.get_outXi_iwjr92_k$()[this.m10__1] = this.get_outXi_iwjr92_k$()[this.m2__1] - Ri;
    this.get_outXr_iwjr9b_k$()[this.m14__1] = this.get_outXr_iwjr9b_k$()[this.m6__1] + Sr;
    this.get_outXi_iwjr92_k$()[this.m14__1] = this.get_outXi_iwjr92_k$()[this.m6__1] + Si;
    var tmp56_array = this.get_outXr_iwjr9b_k$();
    var tmp57_index0 = this.m2__1;
    tmp56_array[tmp57_index0] = tmp56_array[tmp57_index0] + Rr;
    var tmp58_array = this.get_outXi_iwjr92_k$();
    var tmp59_index0 = this.m2__1;
    tmp58_array[tmp59_index0] = tmp58_array[tmp59_index0] + Ri;
    var tmp60_array = this.get_outXr_iwjr9b_k$();
    var tmp61_index0 = this.m6__1;
    tmp60_array[tmp61_index0] = tmp60_array[tmp61_index0] - Sr;
    var tmp62_array = this.get_outXi_iwjr92_k$();
    var tmp63_index0 = this.m6__1;
    tmp62_array[tmp63_index0] = tmp62_array[tmp63_index0] - Si;
    T1r = Companion_getInstance_2().C_3_16__1 * this.get_outXr_iwjr9b_k$()[this.m11__1] + Companion_getInstance_2().C_1_16__1 * this.get_outXi_iwjr92_k$()[this.m11__1];
    T1i = Companion_getInstance_2().C_3_16__1 * this.get_outXi_iwjr92_k$()[this.m11__1] - Companion_getInstance_2().C_1_16__1 * this.get_outXr_iwjr9b_k$()[this.m11__1];
    T3r = -Companion_getInstance_2().C_1_16__1 * this.get_outXr_iwjr9b_k$()[this.m15__1] - Companion_getInstance_2().C_3_16__1 * this.get_outXi_iwjr92_k$()[this.m15__1];
    T3i = -Companion_getInstance_2().C_1_16__1 * this.get_outXi_iwjr92_k$()[this.m15__1] + Companion_getInstance_2().C_3_16__1 * this.get_outXr_iwjr9b_k$()[this.m15__1];
    Rr = T1r + T3r;
    Ri = T1i + T3i;
    Sr = T3i - T1i;
    Si = T1r - T3r;
    this.get_outXr_iwjr9b_k$()[this.m11__1] = this.get_outXr_iwjr9b_k$()[this.m3__1] - Rr;
    this.get_outXi_iwjr92_k$()[this.m11__1] = this.get_outXi_iwjr92_k$()[this.m3__1] - Ri;
    this.get_outXr_iwjr9b_k$()[this.m15__1] = this.get_outXr_iwjr9b_k$()[this.m7__1] + Sr;
    this.get_outXi_iwjr92_k$()[this.m15__1] = this.get_outXi_iwjr92_k$()[this.m7__1] + Si;
    var tmp64_array = this.get_outXr_iwjr9b_k$();
    var tmp65_index0 = this.m3__1;
    tmp64_array[tmp65_index0] = tmp64_array[tmp65_index0] + Rr;
    var tmp66_array = this.get_outXi_iwjr92_k$();
    var tmp67_index0 = this.m3__1;
    tmp66_array[tmp67_index0] = tmp66_array[tmp67_index0] + Ri;
    var tmp68_array = this.get_outXr_iwjr9b_k$();
    var tmp69_index0 = this.m7__1;
    tmp68_array[tmp69_index0] = tmp68_array[tmp69_index0] - Sr;
    var tmp70_array = this.get_outXi_iwjr92_k$();
    var tmp71_index0 = this.m7__1;
    tmp70_array[tmp71_index0] = tmp70_array[tmp71_index0] - Si;
  };
  CDFTsr16.$metadata$ = classMeta('CDFTsr16', undefined, undefined, undefined, undefined, CDFTsr.prototype);
  function _get_n0__ndc5l5_0($this) {
    return $this.n0__1;
  }
  function _get_m0__ndc4ug_0($this) {
    return $this.m0__1;
  }
  function _get_n1__ndc5m0_0($this) {
    return $this.n1__1;
  }
  function _get_n2__ndc5mv_0($this) {
    return $this.n2__1;
  }
  function _get_n3__ndc5nq_0($this) {
    return $this.n3__1;
  }
  function _get_n4__ndc5ol_0($this) {
    return $this.n4__1;
  }
  function _get_n5__ndc5pg_0($this) {
    return $this.n5__1;
  }
  function _get_n6__ndc5qb_0($this) {
    return $this.n6__1;
  }
  function _get_n7__ndc5r6_0($this) {
    return $this.n7__1;
  }
  function _get_m1__ndc4vb_0($this) {
    return $this.m1__1;
  }
  function _get_m2__ndc4w6_0($this) {
    return $this.m2__1;
  }
  function _get_m3__ndc4x1_0($this) {
    return $this.m3__1;
  }
  function _get_m4__ndc4xw_0($this) {
    return $this.m4__1;
  }
  function _get_m5__ndc4yr_0($this) {
    return $this.m5__1;
  }
  function _get_m6__ndc4zm_0($this) {
    return $this.m6__1;
  }
  function _get_m7__ndc50h_0($this) {
    return $this.m7__1;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.math.sqrt' call
    tmp$ret$0 = Math.sqrt(2.0);
    tmp.SQRT2BY2__1 = tmp$ret$0 / 2.0;
  }
  Companion_3.prototype.get_SQRT2BY2_x1x4ni_k$ = function () {
    return this.SQRT2BY2__1;
  };
  Companion_3.$metadata$ = objectMeta('Companion');
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function CDFTsr8(n0, xstride, m0) {
    Companion_getInstance_3();
    CDFTsr_init_$Init$_0(this);
    this.n0__1 = n0;
    this.m0__1 = m0;
    this.m_1 = 3;
    this.N_1 = 8;
    this.xoffset_1 = this.n0__1;
    this.xstride_1 = xstride;
    this.outXoffset_1 = this.m0__1;
    this.n1__1 = this.n0__1 + xstride | 0;
    this.n2__1 = this.n1__1 + xstride | 0;
    this.n3__1 = this.n2__1 + xstride | 0;
    this.n4__1 = this.n3__1 + xstride | 0;
    this.n5__1 = this.n4__1 + xstride | 0;
    this.n6__1 = this.n5__1 + xstride | 0;
    this.n7__1 = this.n6__1 + xstride | 0;
    this.m1__1 = this.m0__1 + 1 | 0;
    this.m2__1 = this.m1__1 + 1 | 0;
    this.m3__1 = this.m2__1 + 1 | 0;
    this.m4__1 = this.m3__1 + 1 | 0;
    this.m5__1 = this.m4__1 + 1 | 0;
    this.m6__1 = this.m5__1 + 1 | 0;
    this.m7__1 = this.m6__1 + 1 | 0;
  }
  CDFTsr8.prototype.link_unhtbf_k$ = function (xr, xi, Xr, Xi) {
    this.xr_1 = xr;
    this.xi_1 = xi;
    this.outXr_1 = Xr;
    this.outXi_1 = Xi;
  };
  CDFTsr8.prototype.link = function (xr, xi, Xr, Xi) {
    return this.link_unhtbf_k$(xr, xi, Xr, Xi);
  };
  CDFTsr8.prototype.evaluate_de95qg_k$ = function () {
    var T1r;
    var T1i;
    var T3r;
    var T3i;
    var Rr;
    var Ri;
    var Sr;
    var Si;
    this.get_outXr_iwjr9b_k$()[this.m0__1] = this.get_xr_kntnjx_k$()[this.n0__1] + this.get_xr_kntnjx_k$()[this.n4__1];
    this.get_outXi_iwjr92_k$()[this.m0__1] = this.get_xi_kntnk6_k$()[this.n0__1] + this.get_xi_kntnk6_k$()[this.n4__1];
    this.get_outXr_iwjr9b_k$()[this.m1__1] = this.get_xr_kntnjx_k$()[this.n0__1] - this.get_xr_kntnjx_k$()[this.n4__1];
    this.get_outXi_iwjr92_k$()[this.m1__1] = this.get_xi_kntnk6_k$()[this.n0__1] - this.get_xi_kntnk6_k$()[this.n4__1];
    Rr = this.get_xr_kntnjx_k$()[this.n2__1] + this.get_xr_kntnjx_k$()[this.n6__1];
    Ri = this.get_xi_kntnk6_k$()[this.n2__1] + this.get_xi_kntnk6_k$()[this.n6__1];
    Sr = this.get_xi_kntnk6_k$()[this.n6__1] - this.get_xi_kntnk6_k$()[this.n2__1];
    Si = this.get_xr_kntnjx_k$()[this.n2__1] - this.get_xr_kntnjx_k$()[this.n6__1];
    this.get_outXr_iwjr9b_k$()[this.m2__1] = this.get_outXr_iwjr9b_k$()[this.m0__1] - Rr;
    this.get_outXi_iwjr92_k$()[this.m2__1] = this.get_outXi_iwjr92_k$()[this.m0__1] - Ri;
    this.get_outXr_iwjr9b_k$()[this.m3__1] = this.get_outXr_iwjr9b_k$()[this.m1__1] + Sr;
    this.get_outXi_iwjr92_k$()[this.m3__1] = this.get_outXi_iwjr92_k$()[this.m1__1] + Si;
    var tmp0_array = this.get_outXr_iwjr9b_k$();
    var tmp1_index0 = this.m0__1;
    tmp0_array[tmp1_index0] = tmp0_array[tmp1_index0] + Rr;
    var tmp2_array = this.get_outXi_iwjr92_k$();
    var tmp3_index0 = this.m0__1;
    tmp2_array[tmp3_index0] = tmp2_array[tmp3_index0] + Ri;
    var tmp4_array = this.get_outXr_iwjr9b_k$();
    var tmp5_index0 = this.m1__1;
    tmp4_array[tmp5_index0] = tmp4_array[tmp5_index0] - Sr;
    var tmp6_array = this.get_outXi_iwjr92_k$();
    var tmp7_index0 = this.m1__1;
    tmp6_array[tmp7_index0] = tmp6_array[tmp7_index0] - Si;
    this.get_outXr_iwjr9b_k$()[this.m4__1] = this.get_xr_kntnjx_k$()[this.n1__1] + this.get_xr_kntnjx_k$()[this.n5__1];
    this.get_outXi_iwjr92_k$()[this.m4__1] = this.get_xi_kntnk6_k$()[this.n1__1] + this.get_xi_kntnk6_k$()[this.n5__1];
    this.get_outXr_iwjr9b_k$()[this.m5__1] = this.get_xr_kntnjx_k$()[this.n1__1] - this.get_xr_kntnjx_k$()[this.n5__1];
    this.get_outXi_iwjr92_k$()[this.m5__1] = this.get_xi_kntnk6_k$()[this.n1__1] - this.get_xi_kntnk6_k$()[this.n5__1];
    this.get_outXr_iwjr9b_k$()[this.m6__1] = this.get_xr_kntnjx_k$()[this.n3__1] + this.get_xr_kntnjx_k$()[this.n7__1];
    this.get_outXi_iwjr92_k$()[this.m6__1] = this.get_xi_kntnk6_k$()[this.n3__1] + this.get_xi_kntnk6_k$()[this.n7__1];
    this.get_outXr_iwjr9b_k$()[this.m7__1] = this.get_xr_kntnjx_k$()[this.n3__1] - this.get_xr_kntnjx_k$()[this.n7__1];
    this.get_outXi_iwjr92_k$()[this.m7__1] = this.get_xi_kntnk6_k$()[this.n3__1] - this.get_xi_kntnk6_k$()[this.n7__1];
    Rr = this.get_outXr_iwjr9b_k$()[this.m4__1] + this.get_outXr_iwjr9b_k$()[this.m6__1];
    Ri = this.get_outXi_iwjr92_k$()[this.m4__1] + this.get_outXi_iwjr92_k$()[this.m6__1];
    Sr = this.get_outXi_iwjr92_k$()[this.m6__1] - this.get_outXi_iwjr92_k$()[this.m4__1];
    Si = this.get_outXr_iwjr9b_k$()[this.m4__1] - this.get_outXr_iwjr9b_k$()[this.m6__1];
    this.get_outXr_iwjr9b_k$()[this.m4__1] = this.get_outXr_iwjr9b_k$()[this.m0__1] - Rr;
    this.get_outXi_iwjr92_k$()[this.m4__1] = this.get_outXi_iwjr92_k$()[this.m0__1] - Ri;
    this.get_outXr_iwjr9b_k$()[this.m6__1] = this.get_outXr_iwjr9b_k$()[this.m2__1] + Sr;
    this.get_outXi_iwjr92_k$()[this.m6__1] = this.get_outXi_iwjr92_k$()[this.m2__1] + Si;
    var tmp8_array = this.get_outXr_iwjr9b_k$();
    var tmp9_index0 = this.m0__1;
    tmp8_array[tmp9_index0] = tmp8_array[tmp9_index0] + Rr;
    var tmp10_array = this.get_outXi_iwjr92_k$();
    var tmp11_index0 = this.m0__1;
    tmp10_array[tmp11_index0] = tmp10_array[tmp11_index0] + Ri;
    var tmp12_array = this.get_outXr_iwjr9b_k$();
    var tmp13_index0 = this.m2__1;
    tmp12_array[tmp13_index0] = tmp12_array[tmp13_index0] - Sr;
    var tmp14_array = this.get_outXi_iwjr92_k$();
    var tmp15_index0 = this.m2__1;
    tmp14_array[tmp15_index0] = tmp14_array[tmp15_index0] - Si;
    T1r = Companion_getInstance_3().SQRT2BY2__1 * (this.get_outXr_iwjr9b_k$()[this.m5__1] + this.get_outXi_iwjr92_k$()[this.m5__1]);
    T1i = Companion_getInstance_3().SQRT2BY2__1 * (this.get_outXi_iwjr92_k$()[this.m5__1] - this.get_outXr_iwjr9b_k$()[this.m5__1]);
    T3r = Companion_getInstance_3().SQRT2BY2__1 * (this.get_outXi_iwjr92_k$()[this.m7__1] - this.get_outXr_iwjr9b_k$()[this.m7__1]);
    T3i = -Companion_getInstance_3().SQRT2BY2__1 * (this.get_outXi_iwjr92_k$()[this.m7__1] + this.get_outXr_iwjr9b_k$()[this.m7__1]);
    Rr = T1r + T3r;
    Ri = T1i + T3i;
    Sr = T3i - T1i;
    Si = T1r - T3r;
    this.get_outXr_iwjr9b_k$()[this.m5__1] = this.get_outXr_iwjr9b_k$()[this.m1__1] - Rr;
    this.get_outXi_iwjr92_k$()[this.m5__1] = this.get_outXi_iwjr92_k$()[this.m1__1] - Ri;
    this.get_outXr_iwjr9b_k$()[this.m7__1] = this.get_outXr_iwjr9b_k$()[this.m3__1] + Sr;
    this.get_outXi_iwjr92_k$()[this.m7__1] = this.get_outXi_iwjr92_k$()[this.m3__1] + Si;
    var tmp16_array = this.get_outXr_iwjr9b_k$();
    var tmp17_index0 = this.m1__1;
    tmp16_array[tmp17_index0] = tmp16_array[tmp17_index0] + Rr;
    var tmp18_array = this.get_outXi_iwjr92_k$();
    var tmp19_index0 = this.m1__1;
    tmp18_array[tmp19_index0] = tmp18_array[tmp19_index0] + Ri;
    var tmp20_array = this.get_outXr_iwjr9b_k$();
    var tmp21_index0 = this.m3__1;
    tmp20_array[tmp21_index0] = tmp20_array[tmp21_index0] - Sr;
    var tmp22_array = this.get_outXi_iwjr92_k$();
    var tmp23_index0 = this.m3__1;
    tmp22_array[tmp23_index0] = tmp22_array[tmp23_index0] - Si;
  };
  CDFTsr8.$metadata$ = classMeta('CDFTsr8', undefined, undefined, undefined, undefined, CDFTsr.prototype);
  function _get_N__7mlo03($this) {
    return $this.N_1;
  }
  function _get_N2__ndbhwn($this) {
    return $this.N2__1;
  }
  function _get_N4__ndbhyd($this) {
    return $this.N4__1;
  }
  function _get_xr__ndcekx($this) {
    return $this.xr_1;
  }
  function _get_xi__ndced6($this) {
    return $this.xi_1;
  }
  function _get_Xr__ndbqup($this) {
    return $this.Xr_1;
  }
  function _get_Xi__ndbqmy($this) {
    return $this.Xi_1;
  }
  function _get_dft__e670yn_0($this) {
    return $this.dft_1;
  }
  function _get_c__7mloi6_1($this) {
    return $this.c_1;
  }
  function _get_s__7mlovy_1($this) {
    return $this.s_1;
  }
  function Companion_4() {
    Companion_instance_4 = this;
  }
  Companion_4.prototype.dftProduct = function (kernel, transform, sign) {
    if (!(kernel.length === transform.length))
      throw IllegalArgumentException_init_$Create$('kernel and transform arrays must have the same size');
    var n = kernel.length;
    var half = n / 2 | 0;
    var tmp0_array = transform;
    var tmp1_index0 = 0;
    tmp0_array[tmp1_index0] = tmp0_array[tmp1_index0] * kernel[0];
    var tmp2_array = transform;
    var tmp3_index0 = half;
    tmp2_array[tmp3_index0] = tmp2_array[tmp3_index0] * kernel[half];
    var tmp;
    var inductionVariable = 1;
    var last = half - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var im = n - i | 0;
        tmp = kernel[i] * transform[i] - sign * kernel[im] * transform[im];
        transform[im] = kernel[i] * transform[im] + sign * kernel[im] * transform[i];
        transform[i] = tmp;
      }
       while (!(i === last));
  };
  Companion_4.$metadata$ = objectMeta('Companion');
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function RDFT(log2N) {
    Companion_getInstance_4();
    if (log2N < 4)
      throw IllegalArgumentException_init_$Create$('DFT size must be >= 16');
    this.N_1 = 1 << log2N;
    this.N2__1 = this.N_1 / 2 | 0;
    this.N4__1 = this.N_1 / 4 | 0;
    this.xr_1 = new Float32Array(this.N2__1);
    this.xi_1 = new Float32Array(this.N2__1);
    this.Xr_1 = new Float32Array(this.N2__1);
    this.Xi_1 = new Float32Array(this.N2__1);
    this.s_1 = new Float32Array(this.N4__1);
    this.c_1 = new Float32Array(this.N4__1);
    var inductionVariable = 0;
    var last = this.N4__1 - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlin.math.sin' call
        var tmp0_sin = 2.0 * get_PI() / this.N_1 * i;
        tmp$ret$0 = Math.sin(tmp0_sin);
        this.s_1[i] = tmp$ret$0;
        var tmp$ret$1;
        // Inline function 'kotlin.math.cos' call
        var tmp1_cos = 2.0 * get_PI() / this.N_1 * i;
        tmp$ret$1 = Math.cos(tmp1_cos);
        this.c_1[i] = tmp$ret$1;
      }
       while (!(i === last));
    this.dft_1 = CDFT_ofLogSize(log2N - 1 | 0);
  }
  RDFT.prototype.evaluate = function (x, X) {
    var inductionVariable = 0;
    var last = this.N2__1 - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var j = i << 1;
        var tmp1 = j;
        j = tmp1 + 1 | 0;
        this.xr_1[i] = x[tmp1];
        this.xi_1[i] = x[j];
      }
       while (!(i === last));
    this.dft_1.evaluateCDFT(this.xr_1, this.xi_1, this.Xr_1, this.Xi_1);
    X[0] = this.Xr_1[0] + this.Xi_1[0];
    X[this.N2__1] = this.Xr_1[0] - this.Xi_1[0];
    var N2pk = this.N2__1 + 1 | 0;
    var N2mk = this.N2__1 - 1 | 0;
    var Nmk = this.N_1 - 1 | 0;
    var inductionVariable_0 = 1;
    var last_0 = this.N4__1 - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var k = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var Xrk = this.Xr_1[k];
        var Xik = this.Xi_1[k];
        var XrN2mk = this.Xr_1[N2mk];
        var XiN2mk = this.Xi_1[N2mk];
        var Sr = (Xrk + XrN2mk) / 2;
        var Si = (Xik - XiN2mk) / 2;
        var Dr = (Xik + XiN2mk) / 2;
        var Di = (XrN2mk - Xrk) / 2;
        var tmp = this.c_1[k] * Dr + this.s_1[k] * Di;
        Di = this.c_1[k] * Di - this.s_1[k] * Dr;
        Dr = tmp;
        X[k] = Sr + Dr;
        X[Nmk] = Si + Di;
        X[N2mk] = Sr - Dr;
        X[N2pk] = Di - Si;
        var tmp3 = N2pk;
        N2pk = tmp3 + 1 | 0;
        var tmp4 = N2mk;
        N2mk = tmp4 - 1 | 0;
        var tmp5 = Nmk;
        Nmk = tmp5 - 1 | 0;
      }
       while (!(k === last_0));
    X[this.N4__1] = this.Xr_1[this.N4__1];
    X[this.N2__1 + this.N4__1 | 0] = -this.Xi_1[this.N4__1];
  };
  RDFT.prototype.evaluateInverse = function (X, x) {
    this.Xr_1[0] = X[0] + X[this.N2__1];
    this.Xi_1[0] = X[0] - X[this.N2__1];
    var N2pk = this.N2__1 + 1 | 0;
    var N2mk = this.N2__1 - 1 | 0;
    var Nmk = this.N_1 - 1 | 0;
    var inductionVariable = 1;
    var last = this.N4__1 - 1 | 0;
    if (inductionVariable <= last)
      do {
        var k = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var Xrk = X[k];
        var Xik = X[Nmk];
        var XrkpN2 = X[N2mk];
        var XikpN2 = -X[N2pk];
        var Dr = Xrk - XrkpN2;
        var Di = Xik - XikpN2;
        this.Xr_1[k] = Xrk + XrkpN2 - this.s_1[k] * Dr - this.c_1[k] * Di;
        this.Xi_1[k] = Xik + XikpN2 + this.c_1[k] * Dr - this.s_1[k] * Di;
        var tmp1 = N2pk;
        N2pk = tmp1 + 1 | 0;
        var tmp2 = N2mk;
        N2mk = tmp2 - 1 | 0;
        var tmp3 = Nmk;
        Nmk = tmp3 - 1 | 0;
      }
       while (!(k === last));
    this.Xr_1[this.N4__1] = 2.0 * X[this.N4__1];
    this.Xi_1[this.N4__1] = -2.0 * X[this.N2__1 + this.N4__1 | 0];
    N2pk = (this.N2__1 + this.N4__1 | 0) + 1 | 0;
    N2mk = this.N4__1 - 1 | 0;
    Nmk = (this.N_1 - this.N4__1 | 0) - 1 | 0;
    var reflect = this.N4__1 - 1 | 0;
    var inductionVariable_0 = this.N4__1 + 1 | 0;
    var last_0 = this.N2__1 - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var k_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var Xrk_0 = X[k_0];
        var Xik_0 = X[Nmk];
        var XrkpN2_0 = X[N2mk];
        var XikpN2_0 = -X[N2pk];
        var Dr_0 = Xrk_0 - XrkpN2_0;
        var Di_0 = Xik_0 - XikpN2_0;
        this.Xr_1[k_0] = Xrk_0 + XrkpN2_0 - this.s_1[reflect] * Dr_0 + this.c_1[reflect] * Di_0;
        this.Xi_1[k_0] = Xik_0 + XikpN2_0 - this.c_1[reflect] * Dr_0 - this.s_1[reflect] * Di_0;
        var tmp5 = N2pk;
        N2pk = tmp5 + 1 | 0;
        var tmp6 = N2mk;
        N2mk = tmp6 - 1 | 0;
        var tmp7 = Nmk;
        Nmk = tmp7 - 1 | 0;
        var tmp8 = reflect;
        reflect = tmp8 - 1 | 0;
      }
       while (!(k_0 === last_0));
    this.dft_1.evaluateCDFT(this.Xr_1, this.Xi_1, this.xr_1, this.xi_1);
    x[0] = this.xr_1[0] / this.N_1;
    x[1] = this.xi_1[0] / this.N_1;
    var j = this.N2__1 - 1 | 0;
    var inductionVariable_1 = 1;
    var last_1 = this.N2__1 - 1 | 0;
    if (inductionVariable_1 <= last_1)
      do {
        var k_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var i = k_1 << 1;
        var tmp10 = i;
        i = tmp10 + 1 | 0;
        x[tmp10] = this.xr_1[j] / this.N_1;
        x[i] = this.xi_1[j] / this.N_1;
        var tmp11 = j;
        j = tmp11 - 1 | 0;
      }
       while (!(k_1 === last_1));
  };
  RDFT.$metadata$ = classMeta('RDFT');
  function _get_order__d67t8d($this) {
    return $this.order_1;
  }
  function _get_x__7mlp09($this) {
    return $this.x_1;
  }
  function _get_y__7mlp14($this) {
    return $this.y_1;
  }
  function _get_weights__qpj14m($this) {
    return $this.weights_1;
  }
  function Companion_5() {
    Companion_instance_5 = this;
  }
  Companion_5.prototype.BarycentricWeights = function (z) {
    var n = z.length;
    var retval = new Float64Array(n);
    var inductionVariable = 0;
    var last = n - 1 | 0;
    if (inductionVariable <= last)
      do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var w = 1.0;
        var inductionVariable_0 = 0;
        var last_0 = n - 1 | 0;
        if (inductionVariable_0 <= last_0)
          do {
            var i = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            if (!(i === j))
              w = w * (z[j] - z[i]);
          }
           while (!(i === last_0));
        retval[j] = 1.0 / w;
      }
       while (!(j === last));
    return retval;
  };
  Companion_5.$metadata$ = objectMeta('Companion');
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function LagrangePolynomial(x, y) {
    Companion_getInstance_5();
    if (!(x.length === y.length))
      throw IllegalArgumentException_init_$Create$('Lengths of x and y arrays do not match');
    var tmp = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = x;
    tmp$ret$1 = tmp$ret$0.slice();
    tmp.x_1 = tmp$ret$1;
    var tmp_0 = this;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = y;
    tmp$ret$3 = tmp$ret$2.slice();
    tmp_0.y_1 = tmp$ret$3;
    this.order_1 = x.length - 1 | 0;
    this.weights_1 = Companion_getInstance_5().BarycentricWeights(x);
  }
  LagrangePolynomial.prototype.order = function () {
    return this.order_1;
  };
  LagrangePolynomial.prototype.evaluateAt = function (xp) {
    var num = 0.0;
    var denom = 0.0;
    var inductionVariable = 0;
    var last = this.order_1;
    if (inductionVariable <= last)
      $l$loop: do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (xp === this.x_1[j]) {
          num = this.y_1[j];
          denom = 1.0;
          break $l$loop;
        }
        var term = this.weights_1[j] / (xp - this.x_1[j]);
        num = num + term * this.y_1[j];
        denom = denom + term;
      }
       while (!(j === last));
    return num / denom;
  };
  LagrangePolynomial.prototype.ChebyshevNodes = function (a, b, n) {
    var t0 = (a + b) / 2.0;
    var t1 = (b - 1) / 2.0;
    var retval = new Float64Array(n);
    var inductionVariable = 0;
    var last = n - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlin.math.cos' call
        var tmp0_cos = ((imul(2, i) + 1 | 0) / imul(2, n) | 0) * get_PI();
        tmp$ret$0 = Math.cos(tmp0_cos);
        retval[i] = t0 + t1 * tmp$ret$0;
      }
       while (!(i === last));
    return retval;
  };
  LagrangePolynomial.$metadata$ = classMeta('LagrangePolynomial');
  function Polynomial_init_$Init$(a, $this) {
    Polynomial.call($this);
    $this._order_1 = a.length - 1 | 0;
    var tmp = $this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = a;
    tmp$ret$1 = tmp$ret$0.slice();
    tmp.a_1 = tmp$ret$1;
    return $this;
  }
  function Polynomial_ofArray(a) {
    return Polynomial_init_$Init$(a, Object.create(Polynomial.prototype));
  }
  function Polynomial_init_$Init$_0(B, $this) {
    Polynomial.call($this);
    $this._order_1 = B._order_1;
    var tmp = $this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = B.a_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    tmp.a_1 = tmp$ret$1;
    return $this;
  }
  function Polynomial_ofPolynomial(B) {
    return Polynomial_init_$Init$_0(B, Object.create(Polynomial.prototype));
  }
  function Polynomial_init_$Init$_1(order, $this) {
    Polynomial.call($this);
    $this._order_1 = order;
    $this.a_1 = new Float64Array(order + 1 | 0);
    return $this;
  }
  function Polynomial_ofDegree(order) {
    return Polynomial_init_$Init$_1(order, Object.create(Polynomial.prototype));
  }
  function Polynomial_init_$Init$_2(c, $this) {
    Polynomial.call($this);
    $this._order_1 = 0;
    $this.a_1 = new Float64Array(1);
    $this.a_1[0] = c;
    return $this;
  }
  function Polynomial_ofConstant(c) {
    return Polynomial_init_$Init$_2(c, Object.create(Polynomial.prototype));
  }
  Polynomial.prototype.set_a_suc4n9_k$ = function (_set____db54di) {
    this.a_1 = _set____db54di;
  };
  Polynomial.prototype.get_a_1mhr5k_k$ = function () {
    return this.a_1;
  };
  Polynomial.prototype.set__order_ax9ysk_k$ = function (_set____db54di) {
    this._order_1 = _set____db54di;
  };
  Polynomial.prototype.get__order_a42a1k_k$ = function () {
    return this._order_1;
  };
  Polynomial.prototype.trim = function () {
    var i = this._order_1;
    var n = 0;
    while (this.a_1[i] === 0.0) {
      var tmp0 = n;
      n = tmp0 + 1 | 0;
      var tmp1 = i;
      i = tmp1 - 1 | 0;
    }
    if (n > 0) {
      var b = new Float64Array((this._order_1 + 1 | 0) - n | 0);
      var inductionVariable = 0;
      var last = b.length - 1 | 0;
      if (inductionVariable <= last)
        do {
          var j = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          b[j] = this.a_1[j];
        }
         while (inductionVariable <= last);
      this.a_1 = b;
      var tmp3_this = this;
      tmp3_this._order_1 = tmp3_this._order_1 - n | 0;
    }
  };
  Polynomial.prototype.order = function () {
    return this._order_1;
  };
  Polynomial.prototype.coefficients = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.a_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    return tmp$ret$1;
  };
  Polynomial.prototype.plusReal = function (c) {
    var retval = Polynomial_ofDegree(this._order_1);
    var tmp = retval;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.a_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    tmp.a_1 = tmp$ret$1;
    var tmp0_array = retval.a_1;
    var tmp1_index0 = 0;
    tmp0_array[tmp1_index0] = tmp0_array[tmp1_index0] + c;
    return retval;
  };
  Polynomial.prototype.plusEqualsReal = function (c) {
    var tmp0_array = this.a_1;
    var tmp1_index0 = 0;
    tmp0_array[tmp1_index0] = tmp0_array[tmp1_index0] + c;
  };
  Polynomial.prototype.plusPolynomial = function (B) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.max' call
    var tmp0_max = this._order_1;
    var tmp1_max = B._order_1;
    tmp$ret$0 = Math.max(tmp0_max, tmp1_max);
    var retval = Polynomial_ofDegree(tmp$ret$0);
    var inductionVariable = 0;
    var last = this._order_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        retval.a_1[i] = this.a_1[i];
      }
       while (!(i === last));
    var inductionVariable_0 = 0;
    var last_0 = B._order_1;
    if (inductionVariable_0 <= last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp2_array = retval.a_1;
        var tmp3_index0 = i_0;
        tmp2_array[tmp3_index0] = tmp2_array[tmp3_index0] + B.a_1[i_0];
      }
       while (!(i_0 === last_0));
    return retval;
  };
  Polynomial.prototype.plusEqualsPolynomial = function (B) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.max' call
    var tmp0_max = this._order_1;
    var tmp1_max = B._order_1;
    tmp$ret$0 = Math.max(tmp0_max, tmp1_max);
    var A = new Float64Array(tmp$ret$0);
    var inductionVariable = 0;
    var last = this._order_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        A[i] = this.a_1[i];
      }
       while (!(i === last));
    var inductionVariable_0 = 0;
    var last_0 = B._order_1;
    if (inductionVariable_0 <= last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp2_array = A;
        var tmp3_index0 = i_0;
        tmp2_array[tmp3_index0] = tmp2_array[tmp3_index0] + B.a_1[i_0];
      }
       while (!(i_0 === last_0));
    this.a_1 = A;
    this._order_1 = A.length - 1 | 0;
  };
  Polynomial.prototype.minusReal = function (c) {
    return this.plusReal(-c);
  };
  Polynomial.prototype.minusEqualsReal = function (c) {
    this.plusEqualsReal(-c);
  };
  Polynomial.prototype.minusPolynomial = function (B) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.max' call
    var tmp0_max = this._order_1;
    var tmp1_max = B._order_1;
    tmp$ret$0 = Math.max(tmp0_max, tmp1_max);
    var retval = Polynomial_ofDegree(tmp$ret$0);
    var inductionVariable = 0;
    var last = this._order_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        retval.a_1[i] = this.a_1[i];
      }
       while (!(i === last));
    var inductionVariable_0 = 0;
    var last_0 = B._order_1;
    if (inductionVariable_0 <= last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp2_array = retval.a_1;
        var tmp3_index0 = i_0;
        tmp2_array[tmp3_index0] = tmp2_array[tmp3_index0] - B.a_1[i_0];
      }
       while (!(i_0 === last_0));
    return retval;
  };
  Polynomial.prototype.minusEqualsPolynomial = function (B) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.max' call
    var tmp0_max = this._order_1;
    var tmp1_max = B._order_1;
    tmp$ret$0 = Math.max(tmp0_max, tmp1_max);
    var A = new Float64Array(tmp$ret$0);
    var inductionVariable = 0;
    var last = this._order_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        A[i] = this.a_1[i];
      }
       while (!(i === last));
    var inductionVariable_0 = 0;
    var last_0 = B._order_1;
    if (inductionVariable_0 <= last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp2_array = A;
        var tmp3_index0 = i_0;
        tmp2_array[tmp3_index0] = tmp2_array[tmp3_index0] - B.a_1[i_0];
      }
       while (!(i_0 === last_0));
    this.a_1 = A;
    this._order_1 = A.length - 1 | 0;
  };
  Polynomial.prototype.timesReal = function (c) {
    var retval = Polynomial_ofDegree(this._order_1);
    var inductionVariable = 0;
    var last = this._order_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        retval.a_1[i] = c * this.a_1[i];
      }
       while (!(i === last));
    return retval;
  };
  Polynomial.prototype.timesEqualsReal = function (c) {
    var inductionVariable = 0;
    var last = this._order_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.a_1;
        var tmp2_index0 = i;
        tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0] * c;
      }
       while (!(i === last));
  };
  Polynomial.prototype.timesPolynomial = function (B) {
    var b = B.a_1;
    var prod = new Float64Array((this._order_1 + B._order_1 | 0) + 1 | 0);
    var inductionVariable = 0;
    var last = B._order_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        var last_0 = this._order_1;
        if (inductionVariable_0 <= last_0)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp2_array = prod;
            var tmp3_index0 = i + j | 0;
            tmp2_array[tmp3_index0] = tmp2_array[tmp3_index0] + b[i] * this.a_1[j];
          }
           while (!(j === last_0));
      }
       while (!(i === last));
    return Polynomial_ofArray(prod);
  };
  Polynomial.prototype.timesEqualsPolynomial = function (B) {
    var b = B.a_1;
    var prod = new Float64Array((this._order_1 + B._order_1 | 0) + 1 | 0);
    var inductionVariable = 0;
    var last = B._order_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        var last_0 = this._order_1;
        if (inductionVariable_0 <= last_0)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp2_array = prod;
            var tmp3_index0 = i + j | 0;
            tmp2_array[tmp3_index0] = tmp2_array[tmp3_index0] + b[i] * this.a_1[j];
          }
           while (!(j === last_0));
      }
       while (!(i === last));
    this.a_1 = prod;
    var tmp4_this = this;
    tmp4_this._order_1 = tmp4_this._order_1 + B._order_1 | 0;
  };
  Polynomial.prototype.overReal = function (c) {
    var tmp = new Float64Array(this._order_1 + 1 | 0);
    var inductionVariable = 0;
    var last = (this._order_1 + 1 | 0) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        tmp[i] = this.a_1[i] / c;
      }
       while (!(i === last));
    return Polynomial_ofArray(tmp);
  };
  Polynomial.prototype.overEqualsReal = function (c) {
    var inductionVariable = 0;
    var last = (this._order_1 + 1 | 0) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.a_1;
        var tmp2_index0 = i;
        tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0] / c;
      }
       while (!(i === last));
  };
  Polynomial.prototype.overEqualsPolynomial = function (B) {
    return Rational_ofPolynomials(this, B);
  };
  Polynomial.prototype.derivative = function () {
    var tmp = new Float64Array(this._order_1);
    var inductionVariable = 0;
    var last = this._order_1 - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        tmp[i] = (i + 1 | 0) * this.a_1[i + 1 | 0];
      }
       while (!(i === last));
    return Polynomial_ofArray(tmp);
  };
  Polynomial.prototype.evaluateReal = function (x) {
    var retval = this.a_1[this._order_1];
    var inductionVariable = this._order_1 - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        retval = x * retval + this.a_1[i];
      }
       while (0 <= inductionVariable);
    return retval;
  };
  Polynomial.prototype.evaluateComplex = function (c) {
    var retval = Complex_fromReal(this.a_1[this._order_1]);
    var inductionVariable = this._order_1 - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        retval = retval.timesComplex(c).plusReal(this.a_1[i]);
      }
       while (0 <= inductionVariable);
    return retval;
  };
  Polynomial.prototype.groupDelay = function (omega) {
    if (this._order_1 === 0)
      return 0.0;
    else {
      var c = new Complex(0.0, omega);
      var N = this.derivative().evaluateComplex(c);
      var D = this.evaluateComplex(c);
      return -N.overComplex(D).real();
    }
  };
  Polynomial.prototype.discreteTimeGroupDelay = function (Omega) {
    var c = Companion_getInstance_8().exp(new Complex(0.0, -Omega));
    var N = Complex_fromReal(this.a_1[this._order_1] * this._order_1);
    var inductionVariable = this._order_1 - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        N = N.timesComplex(c).plusReal(this.a_1[i] * i);
      }
       while (0 <= inductionVariable);
    var D = this.evaluateComplex(c);
    return N.overComplex(D).real();
  };
  Polynomial.prototype.reflectionCoefficients = function () {
    var k = new Float64Array(this._order_1);
    var b = new Float64Array(this._order_1 + 1 | 0);
    b[0] = 1.0;
    var inductionVariable = 0;
    var last = this._order_1 - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        b[i + 1 | 0] = this.a_1[i + 1 | 0] / this.a_1[0];
      }
       while (!(i === last));
    var inductionVariable_0 = this._order_1;
    if (1 <= inductionVariable_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + -1 | 0;
        k[i_0 - 1 | 0] = b[i_0];
        var scale = 1.0 - k[i_0 - 1 | 0] * k[i_0 - 1 | 0];
        var c = new Float64Array(this._order_1);
        var inductionVariable_1 = 0;
        var last_0 = i_0 - 1 | 0;
        if (inductionVariable_1 <= last_0)
          do {
            var j = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            c[j] = (b[j] - k[i_0 - 1 | 0] * b[i_0 - j | 0]) / scale;
          }
           while (!(j === last_0));
        var inductionVariable_2 = 0;
        var last_1 = i_0 - 1 | 0;
        if (inductionVariable_2 <= last_1)
          do {
            var j_0 = inductionVariable_2;
            inductionVariable_2 = inductionVariable_2 + 1 | 0;
            b[j_0] = c[j_0];
          }
           while (!(j_0 === last_1));
      }
       while (1 <= inductionVariable_0);
    return k;
  };
  Polynomial.prototype.toString = function () {
    var s = '';
    var inductionVariable = 0;
    var last = this._order_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (i >= 0 ? i < 10 : false)
          s = s + (i.toString() + '    ' + this.a_1[i] + new Char(_Char___init__impl__6a9atx(10)));
        else if (i >= 10 ? i <= 100 : false)
          s = s + (i.toString() + '   ' + this.a_1[i] + new Char(_Char___init__impl__6a9atx(10)));
      }
       while (!(i === last));
    return s;
  };
  function Polynomial() {
    this._order_1 = 0;
  }
  Polynomial.$metadata$ = classMeta('Polynomial');
  Object.defineProperty(Polynomial.prototype, 'a', {
    configurable: true,
    get: Polynomial.prototype.get_a_1mhr5k_k$,
    set: Polynomial.prototype.set_a_suc4n9_k$
  });
  Object.defineProperty(Polynomial.prototype, '_order', {
    configurable: true,
    get: Polynomial.prototype.get__order_a42a1k_k$,
    set: Polynomial.prototype.set__order_ax9ysk_k$
  });
  function _get_N__7mlo03_0($this) {
    return $this.N_1;
  }
  function _get_D__7mlnrh($this) {
    return $this.D_1;
  }
  function Rational_init_$Init$(num, denom, $this) {
    Rational.call($this);
    $this.N_1 = Polynomial_ofArray(num);
    $this.D_1 = Polynomial_ofArray(denom);
    return $this;
  }
  function Rational_ofArrays(num, denom) {
    return Rational_init_$Init$(num, denom, Object.create(Rational.prototype));
  }
  function Rational_init_$Init$_0(N, D, $this) {
    Rational.call($this);
    $this.N_1 = Polynomial_ofPolynomial(N);
    $this.D_1 = Polynomial_ofPolynomial(D);
    return $this;
  }
  function Rational_ofPolynomials(N, D) {
    return Rational_init_$Init$_0(N, D, Object.create(Rational.prototype));
  }
  function Rational_init_$Init$_1(R, $this) {
    Rational.call($this);
    $this.N_1 = Polynomial_ofPolynomial(R.N_1);
    $this.D_1 = Polynomial_ofPolynomial(R.D_1);
    return $this;
  }
  function Rational_ofRational(R) {
    return Rational_init_$Init$_1(R, Object.create(Rational.prototype));
  }
  function Rational_init_$Init$_2(c, $this) {
    Rational.call($this);
    $this.N_1 = Polynomial_ofConstant(c);
    $this.D_1 = Polynomial_ofConstant(1.0);
    return $this;
  }
  function Rational_ofConstant(c) {
    return Rational_init_$Init$_2(c, Object.create(Rational.prototype));
  }
  Rational.prototype.order = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.intArrayOf' call
    var tmp0_intArrayOf = new Int32Array([this.N_1.order(), this.D_1.order()]);
    tmp$ret$0 = tmp0_intArrayOf;
    var retval = tmp$ret$0;
    return retval;
  };
  Rational.prototype.numerator = function () {
    return Polynomial_ofPolynomial(this.N_1);
  };
  Rational.prototype.denominator = function () {
    return Polynomial_ofPolynomial(this.D_1);
  };
  Rational.prototype.canonicalForm = function () {
    var scaleN = this.N_1.a_1[this.N_1._order_1];
    var inductionVariable = 0;
    var last = this.N_1.a_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.N_1.a_1;
        var tmp2_index0 = i;
        tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0] / scaleN;
      }
       while (inductionVariable <= last);
    var scaleD = this.D_1.a_1[this.D_1._order_1];
    var inductionVariable_0 = 0;
    var last_0 = this.D_1.a_1.length - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp4_array = this.D_1.a_1;
        var tmp5_index0 = i_0;
        tmp4_array[tmp5_index0] = tmp4_array[tmp5_index0] / scaleD;
      }
       while (inductionVariable_0 <= last_0);
    return scaleN / scaleD;
  };
  Rational.prototype.timesEqualsReal = function (A) {
    this.N_1.timesEqualsReal(A);
  };
  Rational.prototype.timesEqualsPolynomial = function (P) {
    this.N_1.timesEqualsPolynomial(P);
  };
  Rational.prototype.timesEqualsRational = function (R) {
    this.N_1.timesEqualsPolynomial(R.N_1);
    this.D_1.timesEqualsPolynomial(R.D_1);
  };
  Rational.prototype.evaluateReal = function (x) {
    var retval = 0.0;
    var num = this.N_1.evaluateReal(x);
    var denom = this.D_1.evaluateReal(x);
    if (!(denom === 0.0))
      retval = num / denom;
    return retval;
  };
  Rational.prototype.evaluateComplex = function (c) {
    var retval = new Complex(0.0, 0.0);
    var num = this.N_1.evaluateComplex(c);
    var denom = this.D_1.evaluateComplex(c);
    if (!(denom.abs() === 0.0))
      retval = num.overComplex(denom);
    return retval;
  };
  Rational.prototype.mapRational = function (S) {
    var P = Polynomial_ofConstant(this.N_1.a_1[this.N_1._order_1]);
    var T = Polynomial_ofConstant(1.0);
    var inductionVariable = this.N_1._order_1 - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        T = T.timesPolynomial(S.D_1);
        P = P.timesPolynomial(S.N_1).plusPolynomial(T.timesReal(this.N_1.a_1[i]));
      }
       while (0 <= inductionVariable);
    var Q = Polynomial_ofConstant(this.D_1.a_1[this.D_1._order_1]);
    T = Polynomial_ofConstant(1.0);
    var inductionVariable_0 = this.D_1._order_1 - 1 | 0;
    if (0 <= inductionVariable_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + -1 | 0;
        T = T.timesPolynomial(S.D_1);
        Q = Q.timesPolynomial(S.N_1).plusPolynomial(T.timesReal(this.D_1.a_1[i_0]));
      }
       while (0 <= inductionVariable_0);
    if (this.D_1._order_1 > this.N_1._order_1) {
      var inductionVariable_1 = 0;
      var last = (this.D_1._order_1 - this.N_1._order_1 | 0) - 1 | 0;
      if (inductionVariable_1 <= last)
        do {
          var i_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          P = P.timesPolynomial(S.D_1);
        }
         while (!(i_1 === last));
    } else if (this.N_1._order_1 > this.D_1._order_1) {
      var inductionVariable_2 = 0;
      var last_0 = (this.N_1._order_1 - this.D_1._order_1 | 0) - 1 | 0;
      if (inductionVariable_2 <= last_0)
        do {
          var i_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          Q = Q.timesPolynomial(S.D_1);
        }
         while (!(i_2 === last_0));
    }
    P.trim();
    Q.trim();
    return Rational_ofPolynomials(P, Q);
  };
  Rational.prototype.residueForReal = function (pole) {
    return this.N_1.evaluateReal(pole) / this.D_1.derivative().evaluateReal(pole);
  };
  Rational.prototype.residueForComplex = function (pole) {
    return this.N_1.evaluateComplex(pole).overComplex(this.D_1.derivative().evaluateComplex(pole));
  };
  Rational.prototype.groupDelay = function (omega) {
    return this.N_1.groupDelay(omega) - this.D_1.groupDelay(omega);
  };
  Rational.prototype.discreteTimeGroupDelay = function (Omega) {
    return this.N_1.discreteTimeGroupDelay(Omega) - this.D_1.discreteTimeGroupDelay(Omega);
  };
  Rational.prototype.toString = function () {
    return 'Numerator: ' + this.N_1 + '\n' + ('Denominator: ' + this.D_1 + '\n');
  };
  function Rational() {
  }
  Rational.$metadata$ = classMeta('Rational');
  function ComplexAnalyticSignal(realSignal) {
    var tmp = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = realSignal;
    tmp$ret$1 = tmp$ret$0.slice();
    tmp._realPart_1 = tmp$ret$1;
    var transformer = new CenteredHilbertTransform(50, 0.03, 0.97);
    var tmp_0 = transformer.filter(this._realPart_1);
    Companion_getInstance().zeroShiftArray(tmp_0, -50);
    this._imagPart_1 = new Float32Array(this._realPart_1.length);
    var inductionVariable = 0;
    var last = this._realPart_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this._imagPart_1[i] = tmp_0[i];
      }
       while (inductionVariable <= last);
  }
  ComplexAnalyticSignal.prototype.set__realPart_f7bi4z_k$ = function (_set____db54di) {
    this._realPart_1 = _set____db54di;
  };
  ComplexAnalyticSignal.prototype.get__realPart_47rtll_k$ = function () {
    return this._realPart_1;
  };
  ComplexAnalyticSignal.prototype.set__imagPart_dn087_k$ = function (_set____db54di) {
    this._imagPart_1 = _set____db54di;
  };
  ComplexAnalyticSignal.prototype.get__imagPart_47qodp_k$ = function () {
    return this._imagPart_1;
  };
  ComplexAnalyticSignal.prototype.get_envelope_5cdspl_k$ = function () {
    var retval = new Float32Array(this._realPart_1.length);
    var inductionVariable = 0;
    var last = this._realPart_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlin.math.sqrt' call
        var tmp0_sqrt = this._realPart_1[i] * this._realPart_1[i] + this._imagPart_1[i] * this._imagPart_1[i];
        tmp$ret$0 = Math.sqrt(tmp0_sqrt);
        retval[i] = tmp$ret$0;
      }
       while (inductionVariable <= last);
    return retval;
  };
  ComplexAnalyticSignal.prototype.getRealPart = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this._realPart_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    return tmp$ret$1;
  };
  ComplexAnalyticSignal.prototype.getImagPart = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this._imagPart_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    return tmp$ret$1;
  };
  ComplexAnalyticSignal.$metadata$ = classMeta('ComplexAnalyticSignal');
  Object.defineProperty(ComplexAnalyticSignal.prototype, 'envelope', {
    configurable: true,
    get: ComplexAnalyticSignal.prototype.get_envelope_5cdspl_k$
  });
  function _get_rate__dczgbv($this) {
    return $this.rate_1;
  }
  function _get_overlapAdd__wylgj5($this) {
    return $this.overlapAdd_1;
  }
  function _get_buffer__tgqkad($this) {
    return $this.buffer_1;
  }
  function Interpolator(rate, designFactor, blockSize) {
    this.rate_1 = rate;
    var half = imul(this.rate_1, designFactor);
    var N = imul(2, half) + 1 | 0;
    var kernel = (new HammingWindow(N)).array;
    var inductionVariable = 1;
    if (inductionVariable <= half)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = kernel;
        var tmp2_index0 = half + i | 0;
        var tmp = tmp1_array[tmp2_index0];
        var tmp$ret$0;
        // Inline function 'kotlin.math.sin' call
        var tmp0_sin = get_PI() * i / this.rate_1;
        tmp$ret$0 = Math.sin(tmp0_sin);
        tmp1_array[tmp2_index0] = tmp * (tmp$ret$0 / (get_PI() * i / this.rate_1));
        kernel[half - i | 0] = kernel[half + i | 0];
      }
       while (!(i === half));
    this.overlapAdd_1 = OverlapAdd_ofArray(kernel, imul(blockSize, this.rate_1));
    this.buffer_1 = new Float32Array(imul(blockSize, this.rate_1));
  }
  Interpolator.prototype.interpolate = function (block, interpolatedBlock) {
    Companion_getInstance().stretchArray(block, this.rate_1, this.buffer_1);
    this.overlapAdd_1.filter(this.buffer_1, 0, interpolatedBlock, 0);
  };
  Interpolator.$metadata$ = classMeta('Interpolator');
  function _set_shiftRegister__p2sj34($this, _set____db54di) {
    $this.shiftRegister_1 = _set____db54di;
  }
  function _get_shiftRegister__9v10ks($this) {
    return $this.shiftRegister_1;
  }
  function _set_fft__4w5psh($this, _set____db54di) {
    $this.fft_1 = _set____db54di;
  }
  function _get_fft__e68axp($this) {
    return $this.fft_1;
  }
  function _set_nfft__9r379t($this, _set____db54di) {
    $this.nfft_1 = _set____db54di;
  }
  function _get_nfft__dav6v9($this) {
    return $this.nfft_1;
  }
  function _set_kernel__mr01oa($this, _set____db54di) {
    $this.kernel_1 = _set____db54di;
  }
  function _get_kernel__o7qmb2($this) {
    return $this.kernel_1;
  }
  function _set_kernelLength__v96yb8($this, _set____db54di) {
    $this.kernelLength_1 = _set____db54di;
  }
  function _get_kernelLength__o86d3s($this) {
    return $this.kernelLength_1;
  }
  function _set_blockSize__tu9q5l($this, _set____db54di) {
    $this.blockSize_1 = _set____db54di;
  }
  function _get_blockSize__jf9r1($this) {
    return $this.blockSize_1;
  }
  function _set_segment__77iylu($this, _set____db54di) {
    $this.segment_1 = _set____db54di;
  }
  function _get_segment__iepbr6($this) {
    return $this.segment_1;
  }
  function _set_transform__8gln3b($this, _set____db54di) {
    $this.transform_1 = _set____db54di;
  }
  function _get_transform__ku8tb9($this) {
    return $this.transform_1;
  }
  function OverlapAdd_init_$Init$(H, blockSize, $this) {
    OverlapAdd.call($this);
    $this.kernelLength_1 = H.length;
    $this.blockSize_1 = blockSize;
    var clength = (H.length + blockSize | 0) - 1 | 0;
    var log2nfft = 0;
    $this.nfft_1 = 1;
    while ($this.nfft_1 < clength) {
      var tmp0 = log2nfft;
      log2nfft = tmp0 + 1 | 0;
      var tmp1_this = $this;
      tmp1_this.nfft_1 = imul(tmp1_this.nfft_1, 2);
    }
    $this.fft_1 = new RDFT(log2nfft);
    $this.shiftRegister_1 = new Float32Array($this.nfft_1);
    $this.kernel_1 = new Float32Array($this.nfft_1);
    $this.segment_1 = new Float32Array($this.nfft_1);
    $this.transform_1 = new Float32Array($this.nfft_1);
    var inductionVariable = 0;
    var last = H.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        ensureNotNull($this.segment_1)[i] = H[i];
      }
       while (inductionVariable <= last);
    ensureNotNull($this.fft_1).evaluate(ensureNotNull($this.segment_1), ensureNotNull($this.kernel_1));
    return $this;
  }
  function OverlapAdd_ofArray(H, blockSize) {
    return OverlapAdd_init_$Init$(H, blockSize, Object.create(OverlapAdd.prototype));
  }
  function OverlapAdd_init_$Init$_0(H, master, $this) {
    OverlapAdd.call($this);
    if (!(H.length === master.kernelLength_1))
      throw IllegalArgumentException_init_$Create$('Slave kernel length inconsistent with master OverlapAdd kernel length');
    $this.kernelLength_1 = H.length;
    $this.blockSize_1 = master.blockSize_1;
    $this.fft_1 = master.fft_1;
    $this.nfft_1 = master.nfft_1;
    $this.shiftRegister_1 = new Float32Array($this.nfft_1);
    $this.kernel_1 = new Float32Array($this.nfft_1);
    $this.segment_1 = new Float32Array($this.nfft_1);
    $this.transform_1 = new Float32Array($this.nfft_1);
    var inductionVariable = 0;
    var last = H.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        ensureNotNull($this.segment_1)[i] = H[i];
      }
       while (inductionVariable <= last);
    ensureNotNull($this.fft_1).evaluate(ensureNotNull($this.segment_1), ensureNotNull($this.kernel_1));
    return $this;
  }
  function OverlapAdd_ofArrayOverlapAdd(H, master) {
    return OverlapAdd_init_$Init$_0(H, master, Object.create(OverlapAdd.prototype));
  }
  OverlapAdd.prototype.filter = function (src, sptr, dst, dptr) {
    if (!(src.length === this.blockSize_1))
      throw IllegalArgumentException_init_$Create$('Data array length not equal to blockSize');
    var inductionVariable = 0;
    var last = ensureNotNull(this.segment_1).length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        ensureNotNull(this.segment_1)[i] = 0.0;
      }
       while (inductionVariable <= last);
    var inductionVariable_0 = 0;
    var last_0 = this.blockSize_1;
    if (inductionVariable_0 <= last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        ensureNotNull(this.segment_1)[i_0] = src[i_0 + sptr | 0];
      }
       while (!(i_0 === last_0));
    ensureNotNull(this.fft_1).evaluate(ensureNotNull(this.segment_1), ensureNotNull(this.transform_1));
    Companion_getInstance_4().dftProduct(ensureNotNull(this.kernel_1), ensureNotNull(this.transform_1), 1.0);
    ensureNotNull(this.fft_1).evaluateInverse(ensureNotNull(this.transform_1), ensureNotNull(this.segment_1));
    var inductionVariable_1 = 0;
    var last_1 = this.nfft_1 - 1 | 0;
    if (inductionVariable_1 <= last_1)
      do {
        var i_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var tmp3_array = this.shiftRegister_1;
        var tmp4_index0 = i_1;
        tmp3_array[tmp4_index0] = tmp3_array[tmp4_index0] + ensureNotNull(this.segment_1)[i_1];
      }
       while (!(i_1 === last_1));
    var inductionVariable_2 = 0;
    var last_2 = this.blockSize_1;
    if (inductionVariable_2 <= last_2)
      do {
        var i_2 = inductionVariable_2;
        inductionVariable_2 = inductionVariable_2 + 1 | 0;
        dst[i_2 + dptr | 0] = this.shiftRegister_1[i_2];
      }
       while (!(i_2 === last_2));
    Companion_getInstance().zeroShiftArray(this.shiftRegister_1, -this.blockSize_1 | 0);
  };
  OverlapAdd.prototype.flush = function (dst, dptr) {
    var inductionVariable = 0;
    var last = this.blockSize_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        dst[i + dptr | 0] = this.shiftRegister_1[i];
      }
       while (!(i === last));
    Companion_getInstance().zeroShiftArray(this.shiftRegister_1, -this.blockSize_1 | 0);
  };
  function OverlapAdd() {
    this.fft_1 = null;
    this.nfft_1 = 0;
    this.kernel_1 = null;
    this.kernelLength_1 = 0;
    this.blockSize_1 = 0;
    this.segment_1 = null;
    this.transform_1 = null;
  }
  OverlapAdd.$metadata$ = classMeta('OverlapAdd');
  function _get_delta__ikpko7($this) {
    return $this.delta_1;
  }
  function CenteredDifferentiator(N, delta, OmegaP) {
    FIRTypeIII.call(this, 1, N);
    this.delta_1 = delta;
    if (!(0.0 < OmegaP ? OmegaP < 1.0 : false))
      throw IllegalArgumentException_init_$Create$('Check 0.0 < OmegaP < 1.0');
    this.bands_1[0][0] = 1.0 / imul(2, N);
    this.bands_1[0][1] = OmegaP;
    this.generateCoefficients();
  }
  CenteredDifferentiator.prototype.desiredResponse_yw2r0a_k$ = function (Omega) {
    var retval = 0.0;
    if (this.LTE(this.bands_1[0][0], Omega) ? this.LTE(Omega, this.bands_1[0][1]) : false)
      retval = -get_PI() * Omega / this.delta_1;
    return retval;
  };
  CenteredDifferentiator.prototype.desiredResponse = function (Omega) {
    return this.desiredResponse_yw2r0a_k$(Omega);
  };
  CenteredDifferentiator.prototype.weight_3hkr93_k$ = function (Omega) {
    var retval = 0.0;
    if (this.LTE(this.bands_1[0][0], Omega) ? this.LTE(Omega, this.bands_1[0][1]) : false)
      retval = 1.0 / Omega;
    return retval;
  };
  CenteredDifferentiator.prototype.weight = function (Omega) {
    return this.weight_3hkr93_k$(Omega);
  };
  CenteredDifferentiator.$metadata$ = classMeta('CenteredDifferentiator', undefined, undefined, undefined, undefined, FIRTypeIII.prototype);
  function CenteredHilbertTransform(N, Omega1, Omega2) {
    FIRTypeIII.call(this, 1, N);
    if (!((0.0 < Omega1 ? Omega1 < Omega2 : false) ? Omega2 < 1.0 : false))
      throw IllegalArgumentException_init_$Create$('Check 0.0 < Omega1 < Omega2 < 1.0');
    this.bands_1[0][0] = Omega1;
    this.bands_1[0][1] = Omega2;
    this.generateCoefficients();
  }
  CenteredHilbertTransform.prototype.desiredResponse_yw2r0a_k$ = function (Omega) {
    var retval = 0.0;
    if (this.LTE(this.bands_1[0][0], Omega) ? this.LTE(Omega, this.bands_1[0][1]) : false)
      retval = 1.0;
    return retval;
  };
  CenteredHilbertTransform.prototype.desiredResponse = function (Omega) {
    return this.desiredResponse_yw2r0a_k$(Omega);
  };
  CenteredHilbertTransform.prototype.weight_3hkr93_k$ = function (Omega) {
    var retval = 0.0;
    if (this.LTE(this.bands_1[0][0], Omega) ? this.LTE(Omega, this.bands_1[0][1]) : false)
      retval = 1.0;
    return retval;
  };
  CenteredHilbertTransform.prototype.weight = function (Omega) {
    return this.weight_3hkr93_k$(Omega);
  };
  CenteredHilbertTransform.$metadata$ = classMeta('CenteredHilbertTransform', undefined, undefined, undefined, undefined, FIRTypeIII.prototype);
  function Companion_6() {
    Companion_instance_6 = this;
    this.GRIDDENSITY_1 = 20;
  }
  Companion_6.prototype.get_GRIDDENSITY_9wle8p_k$ = function () {
    return this.GRIDDENSITY_1;
  };
  Companion_6.$metadata$ = objectMeta('Companion');
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function DesignGrid() {
    Companion_getInstance_6();
    this.gridSize_1 = 0;
    this.containsZero_1 = false;
    this.containsPi_1 = false;
  }
  DesignGrid.prototype.set_grid_bp7z6u_k$ = function (_set____db54di) {
    this.grid_1 = _set____db54di;
  };
  DesignGrid.prototype.get_grid_womu8f_k$ = function () {
    var tmp = this.grid_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('grid');
    }
  };
  DesignGrid.prototype.set_gridSize_fddnyk_k$ = function (_set____db54di) {
    this.gridSize_1 = _set____db54di;
  };
  DesignGrid.prototype.get_gridSize_qjl6ts_k$ = function () {
    return this.gridSize_1;
  };
  DesignGrid.prototype.set_X_mod0ry_k$ = function (_set____db54di) {
    this.X_1 = _set____db54di;
  };
  DesignGrid.prototype.get_X_1mhr5b_k$ = function () {
    var tmp = this.X_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('X');
    }
  };
  DesignGrid.prototype.set_H_3tm5oe_k$ = function (_set____db54di) {
    this.H_1 = _set____db54di;
  };
  DesignGrid.prototype.get_H_1mhr4v_k$ = function () {
    var tmp = this.H_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('H');
    }
  };
  DesignGrid.prototype.set_W_9ksoj5_k$ = function (_set____db54di) {
    this.W_1 = _set____db54di;
  };
  DesignGrid.prototype.get_W_1mhr5a_k$ = function () {
    var tmp = this.W_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('W');
    }
  };
  DesignGrid.prototype.set_bandEdgeIndices_4o2nof_k$ = function (_set____db54di) {
    this.bandEdgeIndices_1 = _set____db54di;
  };
  DesignGrid.prototype.get_bandEdgeIndices_4mq7kc_k$ = function () {
    var tmp = this.bandEdgeIndices_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('bandEdgeIndices');
    }
  };
  DesignGrid.prototype.set_extremaIndices_kapzx9_k$ = function (_set____db54di) {
    this.extremaIndices_1 = _set____db54di;
  };
  DesignGrid.prototype.get_extremaIndices_8bux3s_k$ = function () {
    var tmp = this.extremaIndices_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('extremaIndices');
    }
  };
  DesignGrid.prototype.set_containsZero_c9ryd7_k$ = function (_set____db54di) {
    this.containsZero_1 = _set____db54di;
  };
  DesignGrid.prototype.get_containsZero_uv6ez4_k$ = function () {
    return this.containsZero_1;
  };
  DesignGrid.prototype.set_containsPi_d8e76c_k$ = function (_set____db54di) {
    this.containsPi_1 = _set____db54di;
  };
  DesignGrid.prototype.get_containsPi_hrrp4v_k$ = function () {
    return this.containsPi_1;
  };
  DesignGrid.prototype.toString = function () {
    var out = '';
    var extremum = 0;
    var bandEdgeCount = 0;
    var inductionVariable = 0;
    var last = this.gridSize_1 - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var Omega = this.get_grid_womu8f_k$()[i];
        var line = '' + toString(toLong(i)) + '  ' + Omega + '  ' + this.get_X_1mhr5b_k$()[i] + '  ' + this.get_H_1mhr4v_k$()[i] + '  ' + this.get_W_1mhr5a_k$()[i];
        if (this.get_bandEdgeIndices_4mq7kc_k$()[bandEdgeCount] === i) {
          line = line + '  band edge';
          var tmp1 = bandEdgeCount;
          bandEdgeCount = tmp1 + 1 | 0;
        }
        if (Omega === this.get_grid_womu8f_k$()[this.get_extremaIndices_8bux3s_k$()[extremum]]) {
          line = line + '  extremum';
          var tmp2 = extremum;
          extremum = tmp2 + 1 | 0;
        }
        out = out + (line + new Char(_Char___init__impl__6a9atx(10)));
      }
       while (!(i === last));
    return out;
  };
  DesignGrid.$metadata$ = classMeta('DesignGrid');
  function _get_Ws1__e5yy64($this) {
    return $this.Ws1__1;
  }
  function _get_Wp__ndbq2a($this) {
    return $this.Wp_1;
  }
  function _get_Ws2__e5yy6z($this) {
    return $this.Ws2__1;
  }
  function EquirippleBandpass(N, OmegaS1, Ws1, OmegaP1, OmegaP2, Wp, OmegaS2, Ws2) {
    FIRTypeI.call(this, 3, N);
    this.Ws1__1 = Ws1;
    this.Wp_1 = Wp;
    this.Ws2__1 = Ws2;
    if (!((((0.0 < OmegaS1 ? OmegaS1 < OmegaP1 : false) ? OmegaP1 < OmegaP2 : false) ? OmegaP2 < OmegaS2 : false) ? OmegaS2 < 1.0 : false))
      throw IllegalArgumentException_init_$Create$('Band edge specification error, ensure that 0.0 < OmegaS1 < OmegaP1 < OmegaP2 < OmegaS2 < 1.0');
    this.bands_1[0][0] = 0.0;
    this.bands_1[0][1] = OmegaS1;
    this.bands_1[1][0] = OmegaP1;
    this.bands_1[1][1] = OmegaP2;
    this.bands_1[2][0] = OmegaS2;
    this.bands_1[2][1] = 1.0;
    this.generateCoefficients();
  }
  EquirippleBandpass.prototype.desiredResponse_yw2r0a_k$ = function (Omega) {
    var retval = 0.0;
    if (this.LTE(this.bands_1[1][0], Omega) ? this.LTE(Omega, this.bands_1[1][1]) : false)
      retval = 1.0;
    return retval;
  };
  EquirippleBandpass.prototype.desiredResponse = function (Omega) {
    return this.desiredResponse_yw2r0a_k$(Omega);
  };
  EquirippleBandpass.prototype.weight_3hkr93_k$ = function (Omega) {
    var retval = 0.0;
    if (this.LTE(this.bands_1[0][0], Omega) ? this.LTE(Omega, this.bands_1[0][1]) : false)
      retval = this.Ws1__1;
    else if (this.LTE(this.bands_1[1][0], Omega) ? this.LTE(Omega, this.bands_1[1][1]) : false)
      retval = this.Wp_1;
    else if (this.LTE(this.bands_1[2][0], Omega) ? this.LTE(Omega, this.bands_1[2][1]) : false)
      retval = this.Ws2__1;
    return retval;
  };
  EquirippleBandpass.prototype.weight = function (Omega) {
    return this.weight_3hkr93_k$(Omega);
  };
  EquirippleBandpass.$metadata$ = classMeta('EquirippleBandpass', undefined, undefined, undefined, undefined, FIRTypeI.prototype);
  function _get_MAXITER__g0wxxn($this) {
    return $this.MAXITER_1;
  }
  function EquirippleDesigner() {
    EquirippleDesigner_instance = this;
    this.MAXITER_1 = 25;
  }
  EquirippleDesigner.prototype.remez = function (G) {
    var nextrema = G.get_extremaIndices_8bux3s_k$().length;
    var newExtrema = ArrayList_init_$Create$();
    var E = new Float64Array(G.gridSize_1);
    var GA = new Float64Array(G.gridSize_1);
    var niter = 0;
    $l$loop_1: do {
      var delta = this.computeDelta(G);
      var LP = this.constructInterpolatingPolynomial(G, delta);
      var inductionVariable = 0;
      var last = G.gridSize_1 - 1 | 0;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          GA[i] = LP.evaluateAt(G.get_X_1mhr5b_k$()[i]);
          E[i] = GA[i] - G.get_H_1mhr4v_k$()[i];
        }
         while (!(i === last));
      newExtrema.clear_j9y8zo_k$();
      var change = 0;
      var inductionVariable_0 = 0;
      var last_0 = nextrema - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var currentExtremum = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var currentGridPt = G.get_extremaIndices_8bux3s_k$()[currentExtremum];
          var s = this.sgn(E[currentGridPt]);
          var ptr = currentGridPt + 1 | 0;
          if (ptr < G.gridSize_1) {
            $l$loop: while (this.sgn(E[ptr] - E[ptr - 1 | 0]) === s) {
              var tmp2 = ptr;
              ptr = tmp2 + 1 | 0;
              if (ptr === G.gridSize_1)
                break $l$loop;
            }
          }
          var tmp3 = ptr;
          ptr = tmp3 - 1 | 0;
          if (ptr === currentGridPt) {
            ptr = currentGridPt - 1 | 0;
            if (ptr >= 0) {
              $l$loop_0: while (this.sgn(E[ptr] - E[ptr + 1 | 0]) === s) {
                var tmp4 = ptr;
                ptr = tmp4 - 1 | 0;
                if (ptr < 0)
                  break $l$loop_0;
              }
            }
            var tmp5 = ptr;
            ptr = tmp5 + 1 | 0;
          }
          newExtrema.add_1j60pz_k$(ptr);
          if (!(ptr === currentGridPt)) {
            var tmp6 = change;
            change = tmp6 + 1 | 0;
          }
        }
         while (!(currentExtremum === last_0));
      if (G.containsZero_1 ? G.containsPi_1 : false) {
        var gridPi = G.gridSize_1 - 1 | 0;
        if (newExtrema.contains_2ehdt1_k$(0)) {
          if (!newExtrema.contains_2ehdt1_k$(gridPi)) {
            if (!(this.sgn(E[gridPi]) === this.sgn(E[G.get_extremaIndices_8bux3s_k$()[nextrema - 1 | 0]]))) {
              var tmp$ret$0;
              // Inline function 'kotlin.math.abs' call
              var tmp0_abs = E[gridPi];
              tmp$ret$0 = Math.abs(tmp0_abs);
              var tmp = tmp$ret$0;
              var tmp$ret$1;
              // Inline function 'kotlin.math.abs' call
              var tmp1_abs = E[0];
              tmp$ret$1 = Math.abs(tmp1_abs);
              if (tmp > tmp$ret$1) {
                newExtrema.removeAt_qvpkxi_k$(0);
                newExtrema.add_1j60pz_k$(gridPi);
                var tmp7 = change;
                change = tmp7 + 1 | 0;
              }
            }
          }
        } else {
          if (newExtrema.contains_2ehdt1_k$(gridPi)) {
            if (!(this.sgn(E[0]) === this.sgn(E[G.get_extremaIndices_8bux3s_k$()[0]]))) {
              var tmp$ret$2;
              // Inline function 'kotlin.math.abs' call
              var tmp2_abs = E[0];
              tmp$ret$2 = Math.abs(tmp2_abs);
              var tmp_0 = tmp$ret$2;
              var tmp$ret$3;
              // Inline function 'kotlin.math.abs' call
              var tmp3_abs = E[gridPi];
              tmp$ret$3 = Math.abs(tmp3_abs);
              if (tmp_0 > tmp$ret$3) {
                newExtrema.removeAt_qvpkxi_k$(newExtrema.get_size_woubt6_k$() - 1 | 0);
                newExtrema.add_ydlf05_k$(0, 0);
                var tmp8 = change;
                change = tmp8 + 1 | 0;
              }
            }
          }
        }
      }
      if (change === 0)
        break $l$loop_1;
      var inductionVariable_1 = 0;
      var last_1 = nextrema - 1 | 0;
      if (inductionVariable_1 <= last_1)
        do {
          var i_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          G.get_extremaIndices_8bux3s_k$()[i_0] = newExtrema.get_fkrdnv_k$(i_0);
        }
         while (!(i_0 === last_1));
      var tmp10 = niter;
      niter = tmp10 + 1 | 0;
    }
     while (niter < this.MAXITER_1);
  };
  EquirippleDesigner.prototype.computeDelta = function (G) {
    var nextrema = G.get_extremaIndices_8bux3s_k$().length;
    var extrema = new Float64Array(nextrema);
    var inductionVariable = 0;
    var last = nextrema - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        extrema[i] = G.get_X_1mhr5b_k$()[G.get_extremaIndices_8bux3s_k$()[i]];
      }
       while (!(i === last));
    var gamma = Companion_getInstance_5().BarycentricWeights(extrema);
    var num = 0.0;
    var denom = 0.0;
    var s = 1.0;
    var inductionVariable_0 = 0;
    var last_0 = nextrema - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var j = G.get_extremaIndices_8bux3s_k$()[i_0];
        num = num + gamma[i_0] * G.get_H_1mhr4v_k$()[j];
        denom = denom + s * gamma[i_0] / G.get_W_1mhr5a_k$()[j];
        s = -s;
      }
       while (!(i_0 === last_0));
    return num / denom;
  };
  EquirippleDesigner.prototype.constructInterpolatingPolynomial = function (G, delta) {
    var extremaSubset = new Float64Array(G.get_extremaIndices_8bux3s_k$().length - 1 | 0);
    var n = extremaSubset.length;
    var x = new Float64Array(n);
    var f = new Float64Array(n);
    var s = 1.0;
    var inductionVariable = 0;
    var last = n - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var j = G.get_extremaIndices_8bux3s_k$()[i];
        x[i] = G.get_X_1mhr5b_k$()[j];
        f[i] = G.get_H_1mhr4v_k$()[j] - s * delta / G.get_W_1mhr5a_k$()[j];
        s = -s;
      }
       while (!(i === last));
    return new LagrangePolynomial(x, f);
  };
  EquirippleDesigner.prototype.calculateCoefficients = function (G, Nc) {
    var LP = this.constructInterpolatingPolynomial(G, this.computeDelta(G));
    var log2nfft = 6;
    var nfft = 64;
    while (nfft < Nc) {
      nfft = imul(nfft, 2);
      var tmp0 = log2nfft;
      log2nfft = tmp0 + 1 | 0;
    }
    var X = new Float32Array(nfft);
    var x = new Float32Array(nfft);
    var inductionVariable = 0;
    var last = nfft / 2 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        // Inline function 'kotlin.math.cos' call
        var tmp0_cos = 2.0 * get_PI() * i / nfft;
        tmp$ret$0 = Math.cos(tmp0_cos);
        X[i] = LP.evaluateAt(tmp$ret$0);
      }
       while (!(i === last));
    var dft = new RDFT(log2nfft);
    dft.evaluateInverse(X, x);
    return x;
  };
  EquirippleDesigner.prototype.sgn = function (x) {
    if (x > 0.0)
      return 1;
    else if (x < 0.0)
      return -1;
    else
      return 0;
  };
  EquirippleDesigner.$metadata$ = objectMeta('EquirippleDesigner');
  var EquirippleDesigner_instance;
  function EquirippleDesigner_getInstance() {
    if (EquirippleDesigner_instance == null)
      new EquirippleDesigner();
    return EquirippleDesigner_instance;
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.MACHINETOLERANCE_1 = 1.0E-6;
  }
  Companion_7.prototype.get_MACHINETOLERANCE_yw6kj3_k$ = function () {
    return this.MACHINETOLERANCE_1;
  };
  Companion_7.$metadata$ = objectMeta('Companion');
  Object.defineProperty(Companion_7.prototype, 'MACHINETOLERANCE', {
    configurable: true,
    get: Companion_7.prototype.get_MACHINETOLERANCE_yw6kj3_k$
  });
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function EquirippleFIRFilter(numBands, N, Nc) {
    Companion_getInstance_7();
    this.numBands_1 = numBands;
    this.N_1 = N;
    this.Nc_1 = Nc;
    this._coefficients_1 = null;
    this.implementation_1 = null;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.numBands_1;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
    var tmp_2 = tmp$ret$0;
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$1;
      // Inline function 'com.oregondsp.signalProcessing.filter.fir.equiripple.EquirippleFIRFilter.<anonymous>' call
      tmp$ret$1 = new Float64Array(2);
      tmp_2[tmp_3] = tmp$ret$1;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.bands_1 = tmp_2;
  }
  EquirippleFIRFilter.prototype.set_numBands_se5e1n_k$ = function (_set____db54di) {
    this.numBands_1 = _set____db54di;
  };
  EquirippleFIRFilter.prototype.get_numBands_7jdbr5_k$ = function () {
    return this.numBands_1;
  };
  EquirippleFIRFilter.prototype.set_N_hmx2g1_k$ = function (_set____db54di) {
    this.N_1 = _set____db54di;
  };
  EquirippleFIRFilter.prototype.get_N_1mhr51_k$ = function () {
    return this.N_1;
  };
  EquirippleFIRFilter.prototype.set_Nc_147wda_k$ = function (_set____db54di) {
    this.Nc_1 = _set____db54di;
  };
  EquirippleFIRFilter.prototype.get_Nc_kntoki_k$ = function () {
    return this.Nc_1;
  };
  EquirippleFIRFilter.prototype.set_bands_v2glr4_k$ = function (_set____db54di) {
    this.bands_1 = _set____db54di;
  };
  EquirippleFIRFilter.prototype.get_bands_ip1jn9_k$ = function () {
    return this.bands_1;
  };
  EquirippleFIRFilter.prototype.set__coefficients_wl2gmb_k$ = function (_set____db54di) {
    this._coefficients_1 = _set____db54di;
  };
  EquirippleFIRFilter.prototype.get__coefficients_hv8wpg_k$ = function () {
    return this._coefficients_1;
  };
  EquirippleFIRFilter.prototype.getCoefficients = function () {
    var tmp0_safe_receiver = this._coefficients_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyOf' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_safe_receiver;
      tmp$ret$1 = tmp$ret$0.slice();
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      throw RuntimeException_init_$Create$('Should not happen, access to coefficients before initialized.');
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  };
  EquirippleFIRFilter.prototype.set_implementation_v6iu10_k$ = function (_set____db54di) {
    this.implementation_1 = _set____db54di;
  };
  EquirippleFIRFilter.prototype.get_implementation_9txf7p_k$ = function () {
    return this.implementation_1;
  };
  EquirippleFIRFilter.prototype.createGrid = function () {
    var G = new DesignGrid();
    var nextrema = new Int32Array(this.numBands_1);
    var totalBandwidth = 0.0;
    var inductionVariable = 0;
    var last = this.numBands_1 - 1 | 0;
    if (inductionVariable <= last)
      do {
        var ib = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        totalBandwidth = totalBandwidth + (this.bands_1[ib][1] - this.bands_1[ib][0]);
      }
       while (!(ib === last));
    var m = (this.N_1 + 1 | 0) - imul(2, this.numBands_1) | 0;
    var np = 0;
    var largestBand = 0;
    var nmax = 0;
    var inductionVariable_0 = 0;
    var last_0 = this.numBands_1 - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var ib_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var B = this.bands_1[ib_0][1] - this.bands_1[ib_0][0];
        nextrema[ib_0] = numberToInt(round(m * B / totalBandwidth)) + 2 | 0;
        if (nextrema[ib_0] > nmax) {
          nmax = nextrema[ib_0];
          largestBand = ib_0;
        }
        np = np + nextrema[ib_0] | 0;
      }
       while (!(ib_0 === last_0));
    while (np < (this.N_1 + 1 | 0)) {
      var tmp2_array = nextrema;
      var tmp3_index0 = largestBand;
      var tmp4 = tmp2_array[tmp3_index0];
      tmp2_array[tmp3_index0] = tmp4 + 1 | 0;
      var tmp5 = np;
      np = tmp5 + 1 | 0;
    }
    while (np > (this.N_1 + 1 | 0)) {
      var tmp6_array = nextrema;
      var tmp7_index0 = largestBand;
      var tmp8 = tmp6_array[tmp7_index0];
      tmp6_array[tmp7_index0] = tmp8 - 1 | 0;
      var tmp9 = np;
      np = tmp9 - 1 | 0;
    }
    G.bandEdgeIndices_1 = new Int32Array(imul(this.numBands_1, 2));
    G.extremaIndices_1 = new Int32Array(this.N_1 + 1 | 0);
    var gridArray = ArrayList_init_$Create$();
    var gridpt = 0;
    var extremum = 0;
    var bandEdgeCount = 0;
    var perturbation;
    var inductionVariable_1 = 0;
    var last_1 = this.numBands_1 - 1 | 0;
    if (inductionVariable_1 <= last_1)
      do {
        var ib_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var B_0 = this.bands_1[ib_1][1] - this.bands_1[ib_1][0];
        var n = 1 + imul(nextrema[ib_1] - 1 | 0, Companion_getInstance_6().GRIDDENSITY_1) | 0;
        var dB = B_0 / (n - 1 | 0);
        var base = this.bands_1[ib_1][0];
        var inductionVariable_2 = 0;
        var last_2 = n - 1 | 0;
        if (inductionVariable_2 <= last_2)
          do {
            var i = inductionVariable_2;
            inductionVariable_2 = inductionVariable_2 + 1 | 0;
            var Omega = base + dB * i;
            gridArray.add_1j60pz_k$(Omega);
            if ((i % Companion_getInstance_6().GRIDDENSITY_1 | 0) === 0) {
              if (!(i === 0) ? !(i === (n - 1 | 0)) : false) {
                var tmp$ret$1;
                // Inline function 'kotlin.math.roundToInt' call
                var tmp$ret$0;
                // Inline function 'kotlin.math.floor' call
                var tmp0_floor = Default_getInstance().nextFloat_jqti5l_k$() * 3;
                tmp$ret$0 = Math.floor(tmp0_floor);
                var tmp1_roundToInt = tmp$ret$0;
                tmp$ret$1 = roundToInt(tmp1_roundToInt);
                perturbation = tmp$ret$1 - 1 | 0;
              } else
                perturbation = 0;
              var tmp = G.get_extremaIndices_8bux3s_k$();
              var tmp12 = extremum;
              extremum = tmp12 + 1 | 0;
              tmp[tmp12] = gridpt + perturbation | 0;
            }
            if (i === 0 ? true : i === (n - 1 | 0)) {
              G.get_bandEdgeIndices_4mq7kc_k$()[bandEdgeCount] = gridpt;
              var tmp13 = bandEdgeCount;
              bandEdgeCount = tmp13 + 1 | 0;
            }
            var tmp14 = gridpt;
            gridpt = tmp14 + 1 | 0;
          }
           while (!(i === last_2));
      }
       while (!(ib_1 === last_1));
    G.gridSize_1 = gridArray.get_size_woubt6_k$();
    G.grid_1 = new Float64Array(G.gridSize_1);
    G.X_1 = new Float64Array(G.gridSize_1);
    G.H_1 = new Float64Array(G.gridSize_1);
    G.W_1 = new Float64Array(G.gridSize_1);
    var inductionVariable_3 = 0;
    var last_3 = G.gridSize_1 - 1 | 0;
    if (inductionVariable_3 <= last_3)
      do {
        var i_0 = inductionVariable_3;
        inductionVariable_3 = inductionVariable_3 + 1 | 0;
        G.get_grid_womu8f_k$()[i_0] = gridArray.get_fkrdnv_k$(i_0);
        var tmp_0 = G.get_X_1mhr5b_k$();
        var tmp$ret$2;
        // Inline function 'kotlin.math.cos' call
        var tmp2_cos = G.get_grid_womu8f_k$()[i_0] * get_PI();
        tmp$ret$2 = Math.cos(tmp2_cos);
        tmp_0[i_0] = tmp$ret$2;
      }
       while (!(i_0 === last_3));
    return G;
  };
  EquirippleFIRFilter.prototype.generateCoefficients = function () {
    var G = this.createGrid();
    this.populateGrid(G);
    EquirippleDesigner_getInstance().remez(G);
    this._coefficients_1 = this.interpretCoefficients(EquirippleDesigner_getInstance().calculateCoefficients(G, this.Nc_1));
  };
  EquirippleFIRFilter.prototype.getImplementation = function (blockSize) {
    return OverlapAdd_ofArray(this.getCoefficients(), blockSize);
  };
  EquirippleFIRFilter.prototype.filter = function (x) {
    var nfft = 16;
    var log2nfft = 4;
    var coefficients = this.getCoefficients();
    var n = (x.length + coefficients.length | 0) - 1 | 0;
    while (nfft < n) {
      nfft = imul(nfft, 2);
      var tmp0 = log2nfft;
      log2nfft = tmp0 + 1 | 0;
    }
    var fft = new RDFT(log2nfft);
    var tmp = new Float32Array(nfft);
    var transform = new Float32Array(nfft);
    var kernel = new Float32Array(nfft);
    var inductionVariable = 0;
    var last = x.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        tmp[i] = x[i];
      }
       while (inductionVariable <= last);
    fft.evaluate(tmp, transform);
    var inductionVariable_0 = 0;
    var last_0 = tmp.length - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        tmp[i_0] = 0.0;
      }
       while (inductionVariable_0 <= last_0);
    var inductionVariable_1 = 0;
    var last_1 = coefficients.length - 1 | 0;
    if (inductionVariable_1 <= last_1)
      do {
        var i_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        tmp[i_1] = coefficients[i_1];
      }
       while (inductionVariable_1 <= last_1);
    fft.evaluate(tmp, kernel);
    Companion_getInstance_4().dftProduct(kernel, transform, 1.0);
    fft.evaluateInverse(transform, tmp);
    kernel = new Float32Array(n);
    var inductionVariable_2 = 0;
    if (inductionVariable_2 <= n)
      do {
        var i_2 = inductionVariable_2;
        inductionVariable_2 = inductionVariable_2 + 1 | 0;
        kernel[i_2] = tmp[i_2];
      }
       while (!(i_2 === n));
    return kernel;
  };
  EquirippleFIRFilter.prototype.LTE = function (x, y) {
    var retval = false;
    if (x < y)
      retval = true;
    var tmp$ret$0;
    // Inline function 'kotlin.math.abs' call
    var tmp0_abs = x - y;
    tmp$ret$0 = Math.abs(tmp0_abs);
    if (tmp$ret$0 < Companion_getInstance_7().MACHINETOLERANCE_1)
      retval = true;
    return retval;
  };
  EquirippleFIRFilter.$metadata$ = classMeta('EquirippleFIRFilter');
  Object.defineProperty(EquirippleFIRFilter.prototype, 'numBands', {
    configurable: true,
    get: EquirippleFIRFilter.prototype.get_numBands_7jdbr5_k$,
    set: EquirippleFIRFilter.prototype.set_numBands_se5e1n_k$
  });
  Object.defineProperty(EquirippleFIRFilter.prototype, 'N', {
    configurable: true,
    get: EquirippleFIRFilter.prototype.get_N_1mhr51_k$,
    set: EquirippleFIRFilter.prototype.set_N_hmx2g1_k$
  });
  Object.defineProperty(EquirippleFIRFilter.prototype, 'Nc', {
    configurable: true,
    get: EquirippleFIRFilter.prototype.get_Nc_kntoki_k$,
    set: EquirippleFIRFilter.prototype.set_Nc_147wda_k$
  });
  Object.defineProperty(EquirippleFIRFilter.prototype, 'bands', {
    configurable: true,
    get: EquirippleFIRFilter.prototype.get_bands_ip1jn9_k$,
    set: EquirippleFIRFilter.prototype.set_bands_v2glr4_k$
  });
  Object.defineProperty(EquirippleFIRFilter.prototype, '_coefficients', {
    configurable: true,
    get: EquirippleFIRFilter.prototype.get__coefficients_hv8wpg_k$,
    set: EquirippleFIRFilter.prototype.set__coefficients_wl2gmb_k$
  });
  Object.defineProperty(EquirippleFIRFilter.prototype, 'implementation', {
    configurable: true,
    get: EquirippleFIRFilter.prototype.get_implementation_9txf7p_k$,
    set: EquirippleFIRFilter.prototype.set_implementation_v6iu10_k$
  });
  function _get_coefficients__vzgld9($this) {
    return $this.coefficients_1;
  }
  function EquirippleHalfBand(N, OmegaP) {
    var EHBP = new EquirippleHalfBandPrototype(N, 2 * OmegaP);
    var c = EHBP.getCoefficients();
    this.coefficients_1 = new Float32Array(imul(2, c.length) - 1 | 0);
    var inductionVariable = 0;
    var last = c.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.coefficients_1[imul(2, i)] = 0.5 * c[i];
      }
       while (inductionVariable <= last);
    this.coefficients_1[c.length - 1 | 0] = 0.5;
  }
  EquirippleHalfBand.prototype.getCoefficients = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp0_copyOf = this.coefficients_1;
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_copyOf;
    tmp$ret$1 = tmp$ret$0.slice();
    return tmp$ret$1;
  };
  EquirippleHalfBand.$metadata$ = classMeta('EquirippleHalfBand');
  function EquirippleHalfBandPrototype(N, OmegaP) {
    FIRTypeII.call(this, 1, N);
    if (OmegaP <= 0.0 ? true : OmegaP >= 1.0)
      throw IllegalArgumentException_init_$Create$('OmegaP: ' + OmegaP + ' out of bounds (0.0 < OmegaP < 1.0)');
    this.bands_1[0][0] = 0.0;
    this.bands_1[0][1] = OmegaP;
    this.generateCoefficients();
  }
  EquirippleHalfBandPrototype.prototype.desiredResponse_yw2r0a_k$ = function (Omega) {
    var retval = 0.0;
    if (this.LTE(this.bands_1[0][0], Omega) ? this.LTE(Omega, this.bands_1[0][1]) : false)
      retval = 1.0;
    return retval;
  };
  EquirippleHalfBandPrototype.prototype.desiredResponse = function (Omega) {
    return this.desiredResponse_yw2r0a_k$(Omega);
  };
  EquirippleHalfBandPrototype.prototype.weight_3hkr93_k$ = function (Omega) {
    var retval = 0.0;
    if (this.LTE(this.bands_1[0][0], Omega) ? this.LTE(Omega, this.bands_1[0][1]) : false)
      retval = 1.0;
    return retval;
  };
  EquirippleHalfBandPrototype.prototype.weight = function (Omega) {
    return this.weight_3hkr93_k$(Omega);
  };
  EquirippleHalfBandPrototype.$metadata$ = classMeta('EquirippleHalfBandPrototype', undefined, undefined, undefined, undefined, FIRTypeII.prototype);
  function _get_Ws__ndbq4v($this) {
    return $this.Ws_1;
  }
  function _get_Wp__ndbq2a_0($this) {
    return $this.Wp_1;
  }
  function EquirippleHighpass(N, OmegaS, Ws, OmegaP, Wp) {
    FIRTypeI.call(this, 2, N);
    this.Ws_1 = Ws;
    this.Wp_1 = Wp;
    if (OmegaS >= OmegaP)
      throw IllegalArgumentException_init_$Create$('OmegaS >= OmegaP ');
    if (OmegaS <= 0.0 ? true : OmegaS >= 1.0)
      throw IllegalArgumentException_init_$Create$('OmegaS: ' + OmegaS + ' out of bounds (0.0 < OmegaS < 1.0)');
    if (OmegaP <= 0.0 ? true : OmegaP >= 1.0)
      throw IllegalArgumentException_init_$Create$('OmegaP: ' + OmegaP + ' out of bounds (0.0 < OmegaP < 1.0)');
    this.bands_1[0][0] = 0.0;
    this.bands_1[0][1] = OmegaS;
    this.bands_1[1][0] = OmegaP;
    this.bands_1[1][1] = 1.0;
    this.generateCoefficients();
  }
  EquirippleHighpass.prototype.desiredResponse_yw2r0a_k$ = function (Omega) {
    var retval = 0.0;
    if (this.LTE(this.bands_1[1][0], Omega) ? this.LTE(Omega, this.bands_1[1][1]) : false)
      retval = 1.0;
    return retval;
  };
  EquirippleHighpass.prototype.desiredResponse = function (Omega) {
    return this.desiredResponse_yw2r0a_k$(Omega);
  };
  EquirippleHighpass.prototype.weight_3hkr93_k$ = function (Omega) {
    var retval = 0.0;
    if (this.LTE(this.bands_1[0][0], Omega) ? this.LTE(Omega, this.bands_1[0][1]) : false)
      retval = this.Ws_1;
    else if (this.LTE(this.bands_1[1][0], Omega) ? this.LTE(Omega, this.bands_1[1][1]) : false)
      retval = this.Wp_1;
    return retval;
  };
  EquirippleHighpass.prototype.weight = function (Omega) {
    return this.weight_3hkr93_k$(Omega);
  };
  EquirippleHighpass.$metadata$ = classMeta('EquirippleHighpass', undefined, undefined, undefined, undefined, FIRTypeI.prototype);
  function _get_Wp__ndbq2a_1($this) {
    return $this.Wp_1;
  }
  function _get_Ws__ndbq4v_0($this) {
    return $this.Ws_1;
  }
  function EquirippleLowpass(N, OmegaP, Wp, OmegaS, Ws) {
    FIRTypeI.call(this, 2, N);
    this.Wp_1 = Wp;
    this.Ws_1 = Ws;
    if (OmegaP >= OmegaS)
      throw IllegalArgumentException_init_$Create$('OmegaP >= OmegaS ');
    if (OmegaP <= 0.0 ? true : OmegaP >= 1.0)
      throw IllegalArgumentException_init_$Create$('OmegaP: ' + OmegaP + ' out of bounds (0.0 < OmegaP < 1.0)');
    if (OmegaS <= 0.0 ? true : OmegaS >= 1.0)
      throw IllegalArgumentException_init_$Create$('OmegaS: ' + OmegaS + ' out of bounds (0.0 < OmegaS < 1.0)');
    this.bands_1[0][0] = 0.0;
    this.bands_1[0][1] = OmegaP;
    this.bands_1[1][0] = OmegaS;
    this.bands_1[1][1] = 1.0;
    this.generateCoefficients();
  }
  EquirippleLowpass.prototype.desiredResponse_yw2r0a_k$ = function (Omega) {
    var retval = 0.0;
    if (this.LTE(this.bands_1[0][0], Omega) ? this.LTE(Omega, this.bands_1[0][1]) : false)
      retval = 1.0;
    return retval;
  };
  EquirippleLowpass.prototype.desiredResponse = function (Omega) {
    return this.desiredResponse_yw2r0a_k$(Omega);
  };
  EquirippleLowpass.prototype.weight_3hkr93_k$ = function (Omega) {
    var retval = 0.0;
    if (this.LTE(this.bands_1[0][0], Omega) ? this.LTE(Omega, this.bands_1[0][1]) : false)
      retval = this.Wp_1;
    else if (this.LTE(this.bands_1[1][0], Omega) ? this.LTE(Omega, this.bands_1[1][1]) : false)
      retval = this.Ws_1;
    return retval;
  };
  EquirippleLowpass.prototype.weight = function (Omega) {
    return this.weight_3hkr93_k$(Omega);
  };
  EquirippleLowpass.$metadata$ = classMeta('EquirippleLowpass', undefined, undefined, undefined, undefined, FIRTypeI.prototype);
  function FIRTypeI(numBands, nHalf) {
    EquirippleFIRFilter.call(this, numBands, nHalf + 1 | 0, imul(2, nHalf) + 1 | 0);
  }
  FIRTypeI.prototype.populateGrid_wohwv6_k$ = function (G) {
    var inductionVariable = 0;
    var last = G.gridSize_1 - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        G.get_H_1mhr4v_k$()[i] = this.desiredResponse(G.get_grid_womu8f_k$()[i]);
        G.get_W_1mhr5a_k$()[i] = this.weight(G.get_grid_womu8f_k$()[i]);
      }
       while (!(i === last));
    G.containsZero_1 = true;
    G.containsPi_1 = true;
  };
  FIRTypeI.prototype.populateGrid = function (G) {
    return this.populateGrid_wohwv6_k$(G);
  };
  FIRTypeI.prototype.interpretCoefficients_ctexi_k$ = function (coefficients) {
    var retval = new Float32Array(this.Nc_1);
    Companion_getInstance().circularShiftArray(coefficients, this.N_1 - 1 | 0);
    var inductionVariable = 0;
    var last = this.Nc_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        retval[i] = coefficients[i];
      }
       while (!(i === last));
    return retval;
  };
  FIRTypeI.prototype.interpretCoefficients = function (coefficients) {
    return this.interpretCoefficients_ctexi_k$(coefficients);
  };
  FIRTypeI.$metadata$ = classMeta('FIRTypeI', undefined, undefined, undefined, undefined, EquirippleFIRFilter.prototype);
  function FIRTypeII(numBands, nHalf) {
    EquirippleFIRFilter.call(this, numBands, nHalf, imul(2, nHalf));
  }
  FIRTypeII.prototype.populateGrid_wohwv6_k$ = function (G) {
    var inductionVariable = 0;
    var last = G.gridSize_1 - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = G.get_H_1mhr4v_k$();
        var tmp_0 = this.desiredResponse(G.get_grid_womu8f_k$()[i]);
        var tmp$ret$0;
        // Inline function 'kotlin.math.cos' call
        var tmp0_cos = G.get_grid_womu8f_k$()[i] * get_PI() / 2.0;
        tmp$ret$0 = Math.cos(tmp0_cos);
        tmp[i] = tmp_0 / tmp$ret$0;
        var tmp_1 = G.get_W_1mhr5a_k$();
        var tmp_2 = this.weight(G.get_grid_womu8f_k$()[i]);
        var tmp$ret$1;
        // Inline function 'kotlin.math.cos' call
        var tmp1_cos = G.get_grid_womu8f_k$()[i] * get_PI() / 2.0;
        tmp$ret$1 = Math.cos(tmp1_cos);
        tmp_1[i] = tmp_2 * tmp$ret$1;
      }
       while (!(i === last));
    var tmp$ret$2;
    // Inline function 'kotlin.math.abs' call
    var tmp2_abs = G.get_grid_womu8f_k$()[0];
    tmp$ret$2 = Math.abs(tmp2_abs);
    if (tmp$ret$2 < 1.0E-6)
      G.containsZero_1 = true;
    else {
      G.containsZero_1 = false;
    }
    G.containsPi_1 = false;
  };
  FIRTypeII.prototype.populateGrid = function (G) {
    return this.populateGrid_wohwv6_k$(G);
  };
  FIRTypeII.prototype.interpretCoefficients_ctexi_k$ = function (coefficients) {
    var retval = new Float32Array(this.Nc_1);
    Companion_getInstance().circularShiftArray(coefficients, this.N_1 - 1 | 0);
    retval[0] = 0.5 * coefficients[0];
    var inductionVariable = 1;
    var last = (this.Nc_1 - 1 | 0) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        retval[i] = 0.5 * (coefficients[i] + coefficients[i - 1 | 0]);
      }
       while (!(i === last));
    retval[this.Nc_1 - 1 | 0] = 0.5 * coefficients[this.Nc_1 - 2 | 0];
    return retval;
  };
  FIRTypeII.prototype.interpretCoefficients = function (coefficients) {
    return this.interpretCoefficients_ctexi_k$(coefficients);
  };
  FIRTypeII.$metadata$ = classMeta('FIRTypeII', undefined, undefined, undefined, undefined, EquirippleFIRFilter.prototype);
  function FIRTypeIII(numBands, nHalf) {
    EquirippleFIRFilter.call(this, numBands, nHalf, imul(2, nHalf) + 1 | 0);
  }
  FIRTypeIII.prototype.populateGrid_wohwv6_k$ = function (G) {
    var inductionVariable = 0;
    var last = G.gridSize_1 - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = G.get_H_1mhr4v_k$();
        var tmp_0 = this.desiredResponse(G.get_grid_womu8f_k$()[i]);
        var tmp$ret$0;
        // Inline function 'kotlin.math.sin' call
        var tmp0_sin = G.get_grid_womu8f_k$()[i] * get_PI();
        tmp$ret$0 = Math.sin(tmp0_sin);
        tmp[i] = tmp_0 / tmp$ret$0;
        var tmp_1 = G.get_W_1mhr5a_k$();
        var tmp_2 = this.weight(G.get_grid_womu8f_k$()[i]);
        var tmp$ret$1;
        // Inline function 'kotlin.math.sin' call
        var tmp1_sin = G.get_grid_womu8f_k$()[i] * get_PI();
        tmp$ret$1 = Math.sin(tmp1_sin);
        tmp_1[i] = tmp_2 * tmp$ret$1;
      }
       while (!(i === last));
    G.containsZero_1 = false;
    G.containsPi_1 = false;
  };
  FIRTypeIII.prototype.populateGrid = function (G) {
    return this.populateGrid_wohwv6_k$(G);
  };
  FIRTypeIII.prototype.interpretCoefficients_ctexi_k$ = function (coefficients) {
    var retval = new Float32Array(this.Nc_1);
    Companion_getInstance().circularShiftArray(coefficients, this.N_1 - 1 | 0);
    retval[0] = -0.5 * coefficients[0];
    retval[1] = -0.5 * coefficients[1];
    var inductionVariable = 2;
    var last = (this.Nc_1 - 2 | 0) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        retval[i] = 0.5 * (coefficients[i - 2 | 0] - coefficients[i]);
      }
       while (!(i === last));
    retval[this.Nc_1 - 2 | 0] = 0.5 * coefficients[this.Nc_1 - 4 | 0];
    retval[this.Nc_1 - 1 | 0] = 0.5 * coefficients[this.Nc_1 - 3 | 0];
    return retval;
  };
  FIRTypeIII.prototype.interpretCoefficients = function (coefficients) {
    return this.interpretCoefficients_ctexi_k$(coefficients);
  };
  FIRTypeIII.$metadata$ = classMeta('FIRTypeIII', undefined, undefined, undefined, undefined, EquirippleFIRFilter.prototype);
  function FIRTypeIV(numBands, nHalf) {
    EquirippleFIRFilter.call(this, numBands, nHalf, imul(2, nHalf));
  }
  FIRTypeIV.prototype.populateGrid_wohwv6_k$ = function (G) {
    var inductionVariable = 0;
    var last = G.gridSize_1 - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = G.get_H_1mhr4v_k$();
        var tmp_0 = this.desiredResponse(G.get_grid_womu8f_k$()[i]);
        var tmp$ret$0;
        // Inline function 'kotlin.math.sin' call
        var tmp0_sin = G.get_grid_womu8f_k$()[i] * get_PI() / 2.0;
        tmp$ret$0 = Math.sin(tmp0_sin);
        tmp[i] = tmp_0 / tmp$ret$0;
        var tmp_1 = G.get_W_1mhr5a_k$();
        var tmp_2 = this.weight(G.get_grid_womu8f_k$()[i]);
        var tmp$ret$1;
        // Inline function 'kotlin.math.sin' call
        var tmp1_sin = G.get_grid_womu8f_k$()[i] * get_PI() / 2.0;
        tmp$ret$1 = Math.sin(tmp1_sin);
        tmp_1[i] = tmp_2 * tmp$ret$1;
      }
       while (!(i === last));
    G.containsZero_1 = false;
    var tmp$ret$2;
    // Inline function 'kotlin.math.abs' call
    var tmp2_abs = G.get_grid_womu8f_k$()[G.gridSize_1 - 1 | 0] - 1.0;
    tmp$ret$2 = Math.abs(tmp2_abs);
    if (tmp$ret$2 < 1.0E-6)
      G.containsPi_1 = true;
    else {
      G.containsPi_1 = false;
    }
  };
  FIRTypeIV.prototype.populateGrid = function (G) {
    return this.populateGrid_wohwv6_k$(G);
  };
  FIRTypeIV.prototype.interpretCoefficients_ctexi_k$ = function (coefficients) {
    var retval = new Float32Array(this.Nc_1);
    Companion_getInstance().circularShiftArray(coefficients, this.N_1 - 1 | 0);
    retval[0] = -0.5 * coefficients[0];
    var inductionVariable = 1;
    var last = (this.Nc_1 - 1 | 0) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        retval[i] = 0.5 * (coefficients[i - 1 | 0] - coefficients[i]);
      }
       while (!(i === last));
    retval[this.Nc_1 - 1 | 0] = 0.5 * coefficients[this.Nc_1 - 2 | 0];
    return retval;
  };
  FIRTypeIV.prototype.interpretCoefficients = function (coefficients) {
    return this.interpretCoefficients_ctexi_k$(coefficients);
  };
  FIRTypeIV.$metadata$ = classMeta('FIRTypeIV', undefined, undefined, undefined, undefined, EquirippleFIRFilter.prototype);
  function _get_delta__ikpko7_0($this) {
    return $this.delta_1;
  }
  function StaggeredDifferentiator(N, delta) {
    FIRTypeIV.call(this, 1, N);
    this.delta_1 = delta;
    this.bands_1[0][0] = 1.0 / imul(2, N);
    this.bands_1[0][1] = 1.0;
    this.generateCoefficients();
  }
  StaggeredDifferentiator.prototype.desiredResponse_yw2r0a_k$ = function (Omega) {
    var retval = 0.0;
    if (this.LTE(this.bands_1[0][0], Omega) ? this.LTE(Omega, this.bands_1[0][1]) : false)
      retval = -get_PI() * Omega / this.delta_1;
    return retval;
  };
  StaggeredDifferentiator.prototype.desiredResponse = function (Omega) {
    return this.desiredResponse_yw2r0a_k$(Omega);
  };
  StaggeredDifferentiator.prototype.weight_3hkr93_k$ = function (Omega) {
    var retval = 0.0;
    if (this.LTE(this.bands_1[0][0], Omega) ? this.LTE(Omega, this.bands_1[0][1]) : false)
      retval = 1.0 / Omega;
    return retval;
  };
  StaggeredDifferentiator.prototype.weight = function (Omega) {
    return this.weight_3hkr93_k$(Omega);
  };
  StaggeredDifferentiator.$metadata$ = classMeta('StaggeredDifferentiator', undefined, undefined, undefined, undefined, FIRTypeIV.prototype);
  function StaggeredHilbertTranform(N, OmegaP) {
    FIRTypeIV.call(this, 1, N);
    if (!(0.0 < OmegaP ? OmegaP < 1.0 : false))
      throw IllegalArgumentException_init_$Create$('Check 0.0 < OmegaP < 1.0');
    this.bands_1[0][0] = OmegaP;
    this.bands_1[0][1] = 1.0;
    this.generateCoefficients();
  }
  StaggeredHilbertTranform.prototype.desiredResponse_yw2r0a_k$ = function (Omega) {
    var retval = 0.0;
    if (this.LTE(this.bands_1[0][0], Omega) ? this.LTE(Omega, this.bands_1[0][1]) : false)
      retval = 1.0;
    return retval;
  };
  StaggeredHilbertTranform.prototype.desiredResponse = function (Omega) {
    return this.desiredResponse_yw2r0a_k$(Omega);
  };
  StaggeredHilbertTranform.prototype.weight_3hkr93_k$ = function (Omega) {
    var retval = 0.0;
    if (this.LTE(this.bands_1[0][0], Omega) ? this.LTE(Omega, this.bands_1[0][1]) : false)
      retval = 1.0;
    return retval;
  };
  StaggeredHilbertTranform.prototype.weight = function (Omega) {
    return this.weight_3hkr93_k$(Omega);
  };
  StaggeredHilbertTranform.$metadata$ = classMeta('StaggeredHilbertTranform', undefined, undefined, undefined, undefined, FIRTypeIV.prototype);
  function Allpass_init_$Init$(A, $this) {
    Allpass.call($this, A.reflectionCoefficients().length);
    $this.k_1 = A.reflectionCoefficients();
    $this.state_1 = new Float64Array($this.order_1 + 1 | 0);
    $this.constructRationalRepresentation();
    return $this;
  }
  function Allpass_ofPolynomial(A) {
    return Allpass_init_$Init$(A, Object.create(Allpass.prototype));
  }
  function Allpass_init_$Init$_0(k, $this) {
    Allpass.call($this, k.length);
    var tmp = $this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.copyOf' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = k;
    tmp$ret$1 = tmp$ret$0.slice();
    tmp.k_1 = tmp$ret$1;
    $this.order_1 = $this.k_1.length;
    $this.state_1 = new Float64Array($this.order_1 + 1 | 0);
    $this.constructRationalRepresentation();
    return $this;
  }
  function Allpass_ofArray(k) {
    return Allpass_init_$Init$_0(k, Object.create(Allpass.prototype));
  }
  function Allpass(filterorder) {
    this.order_1 = filterorder;
    this.k_1 = new Float64Array(this.order_1);
    this.state_1 = new Float64Array(this.order_1 + 1 | 0);
    this.constructRationalRepresentation();
  }
  Allpass.prototype.set_k_3rn45h_k$ = function (_set____db54di) {
    this.k_1 = _set____db54di;
  };
  Allpass.prototype.get_k_1mhr5u_k$ = function () {
    return this.k_1;
  };
  Allpass.prototype.set_order_nhlmht_k$ = function (_set____db54di) {
    this.order_1 = _set____db54di;
  };
  Allpass.prototype.get_order_iwhiqt_k$ = function () {
    return this.order_1;
  };
  Allpass.prototype.set_state_4gdqnf_k$ = function (_set____db54di) {
    this.state_1 = _set____db54di;
  };
  Allpass.prototype.get_state_iypx7s_k$ = function () {
    return this.state_1;
  };
  Allpass.prototype.set_T_dortqy_k$ = function (_set____db54di) {
    this.T_1 = _set____db54di;
  };
  Allpass.prototype.get_T_1mhr57_k$ = function () {
    var tmp = this.T_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('T');
    }
  };
  Allpass.prototype.initialize = function () {
    var inductionVariable = 0;
    var last = this.state_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.state_1[i] = 0.0;
      }
       while (inductionVariable <= last);
  };
  Allpass.prototype.filterSingle = function (x) {
    var myX = x;
    var stage = this.order_1;
    while (stage >= 0) {
      if (stage > 0) {
        myX = myX - this.k_1[stage - 1 | 0] * this.state_1[stage - 1 | 0];
        this.state_1[stage] = this.k_1[stage - 1 | 0] * myX + this.state_1[stage - 1 | 0];
      } else {
        this.state_1[stage] = myX;
      }
      var tmp0 = stage;
      stage = tmp0 - 1 | 0;
    }
    return this.state_1[this.order_1];
  };
  Allpass.prototype.filter = function (x) {
    var inductionVariable = 0;
    var last = x.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        x[i] = this.filterSingle(x[i]);
      }
       while (inductionVariable <= last);
  };
  Allpass.prototype.evaluate = function (omega) {
    var ejOmega = Companion_getInstance_8().exp(new Complex(0.0, -omega));
    return this.T.evaluateComplex(ejOmega);
  };
  Allpass.prototype.groupDelay = function (Omega) {
    return this.T.discreteTimeGroupDelay(Omega);
  };
  Allpass.prototype.constructRationalRepresentation = function () {
    var a = new Float64Array(this.order_1 + 1 | 0);
    var b = new Float64Array(this.order_1 + 1 | 0);
    a[0] = 1.0;
    var inductionVariable = 0;
    var last = this.order_1 - 1 | 0;
    if (inductionVariable <= last)
      do {
        var p = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        var last_0 = b.length - 1 | 0;
        if (inductionVariable_0 <= last_0)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            b[j] = 0.0;
          }
           while (inductionVariable_0 <= last_0);
        var i = 0;
        while (i <= p) {
          var tmp2_array = b;
          var tmp3_index0 = i;
          tmp2_array[tmp3_index0] = tmp2_array[tmp3_index0] + a[i];
          var tmp4_array = b;
          var tmp5_index0 = i + 1 | 0;
          tmp4_array[tmp5_index0] = tmp4_array[tmp5_index0] + this.k_1[p] * a[p - i | 0];
          var tmp6 = i;
          i = tmp6 + 1 | 0;
        }
        var inductionVariable_1 = 0;
        var last_1 = p + 2 | 0;
        if (inductionVariable_1 <= last_1)
          do {
            var k = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            a[k] = b[k];
          }
           while (!(k === last_1));
      }
       while (!(p === last));
    var inductionVariable_2 = 0;
    var last_2 = b.length - 1 | 0;
    if (inductionVariable_2 <= last_2)
      do {
        var j_0 = inductionVariable_2;
        inductionVariable_2 = inductionVariable_2 + 1 | 0;
        b[j_0] = 0.0;
      }
       while (inductionVariable_2 <= last_2);
    var inductionVariable_3 = 0;
    var last_3 = this.order_1;
    if (inductionVariable_3 <= last_3)
      do {
        var i_0 = inductionVariable_3;
        inductionVariable_3 = inductionVariable_3 + 1 | 0;
        b[i_0] = a[this.order_1 - i_0 | 0];
      }
       while (!(i_0 === last_3));
    this.T_1 = Rational_ofPolynomials(Polynomial_ofArray(b), Polynomial_ofArray(a));
  };
  Allpass.prototype.rationalRepresentation = function () {
    return Rational_ofRational(this.T);
  };
  Allpass.prototype.toString = function () {
    var out = 'Allpass _order:  ' + this.order_1 + new Char(_Char___init__impl__6a9atx(10));
    var inductionVariable = 0;
    var last = this.order_1 - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (i < this.order_1) {
          if (this.k_1[i] < 0.0)
            out = out + ('  ' + this.k_1[i] + '  ' + this.state_1[i] + new Char(_Char___init__impl__6a9atx(10)));
          else
            out = out + ('   ' + this.k_1[i] + '  ' + this.state_1[i] + new Char(_Char___init__impl__6a9atx(10)));
        } else
          out = out + ('             ' + this.state_1[i] + new Char(_Char___init__impl__6a9atx(10)));
      }
       while (!(i === last));
    return out;
  };
  Allpass.$metadata$ = classMeta('Allpass');
  Object.defineProperty(Allpass.prototype, 'k', {
    configurable: true,
    get: Allpass.prototype.get_k_1mhr5u_k$,
    set: Allpass.prototype.set_k_3rn45h_k$
  });
  Object.defineProperty(Allpass.prototype, 'order', {
    configurable: true,
    get: Allpass.prototype.get_order_iwhiqt_k$,
    set: Allpass.prototype.set_order_nhlmht_k$
  });
  Object.defineProperty(Allpass.prototype, 'state', {
    configurable: true,
    get: Allpass.prototype.get_state_iypx7s_k$,
    set: Allpass.prototype.set_state_4gdqnf_k$
  });
  Object.defineProperty(Allpass.prototype, 'T', {
    configurable: true,
    get: Allpass.prototype.get_T_1mhr57_k$,
    set: Allpass.prototype.set_T_dortqy_k$
  });
  function AnalogButterworth(order) {
    AnalogPrototype.call(this);
    var nRealPoles = order - imul(2, order / 2 | 0) | 0;
    var nComplexPolePairs = order / 2 | 0;
    var nPoles = nRealPoles + imul(2, nComplexPolePairs) | 0;
    if (nRealPoles === 1) {
      var tmp$ret$0;
      // Inline function 'kotlin.doubleArrayOf' call
      tmp$ret$0 = new Float64Array([1.0, 1.0]);
      var td = tmp$ret$0;
      this.addSection(Rational_ofPolynomials(Polynomial_ofConstant(1.0), Polynomial_ofArray(td)));
    }
    var dAngle = get_PI() / nPoles;
    var inductionVariable = 0;
    var last = nComplexPolePairs - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var angle = -get_PI() / 2 + dAngle / 2 * (1 + nRealPoles | 0) + i * dAngle;
        var tmp$ret$2;
        // Inline function 'kotlin.doubleArrayOf' call
        var tmp$ret$1;
        // Inline function 'kotlin.math.sin' call
        tmp$ret$1 = Math.sin(angle);
        var tmp0_doubleArrayOf = new Float64Array([1.0, -2 * tmp$ret$1, 1.0]);
        tmp$ret$2 = tmp0_doubleArrayOf;
        var td_0 = tmp$ret$2;
        this.addSection(Rational_ofPolynomials(Polynomial_ofConstant(1.0), Polynomial_ofArray(td_0)));
      }
       while (!(i === last));
  }
  AnalogButterworth.$metadata$ = classMeta('AnalogButterworth', undefined, undefined, undefined, undefined, AnalogPrototype.prototype);
  function AnalogChebyshevI(order, epsilon) {
    AnalogPrototype.call(this);
    var tmp$ret$0;
    // Inline function 'kotlin.math.sqrt' call
    var tmp0_sqrt = 1.0 + epsilon * epsilon;
    tmp$ret$0 = Math.sqrt(tmp0_sqrt);
    var alpha = (1.0 + tmp$ret$0) / epsilon;
    var tmp$ret$1;
    // Inline function 'kotlin.math.pow' call
    var tmp1_pow = 1.0 / order;
    tmp$ret$1 = Math.pow(alpha, tmp1_pow);
    var p = tmp$ret$1;
    var a = 0.5 * (p - 1 / p);
    var b = 0.5 * (p + 1 / p);
    println('alpha: ' + alpha);
    println('p:     ' + p);
    println('a:     ' + a);
    println('b:     ' + b);
    var nRealPoles = order - imul(2, order / 2 | 0) | 0;
    var nComplexPolePairs = order / 2 | 0;
    var nPoles = nRealPoles + imul(2, nComplexPolePairs) | 0;
    if (nRealPoles === 1) {
      var tmp$ret$2;
      // Inline function 'kotlin.doubleArrayOf' call
      tmp$ret$2 = new Float64Array([a, 1.0]);
      var td = tmp$ret$2;
      this.addSection(Rational_ofPolynomials(Polynomial_ofConstant(1.0), Polynomial_ofArray(td)));
    }
    var dAngle = get_PI() / nPoles;
    var inductionVariable = 0;
    var last = nComplexPolePairs - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var angle = -get_PI() / 2 + dAngle / 2 * (1 + nRealPoles | 0) + i * dAngle;
        var tmp$ret$3;
        // Inline function 'kotlin.math.sin' call
        tmp$ret$3 = Math.sin(angle);
        var tmp = a * tmp$ret$3;
        var tmp$ret$4;
        // Inline function 'kotlin.math.cos' call
        tmp$ret$4 = Math.cos(angle);
        var pole = new Complex(tmp, b * tmp$ret$4);
        var tmp$ret$5;
        // Inline function 'kotlin.doubleArrayOf' call
        var tmp2_doubleArrayOf = new Float64Array([pole.real() * pole.real() + pole.imag() * pole.imag(), -2 * pole.real(), 1.0]);
        tmp$ret$5 = tmp2_doubleArrayOf;
        var td_0 = tmp$ret$5;
        this.addSection(Rational_ofPolynomials(Polynomial_ofConstant(1.0), Polynomial_ofArray(td_0)));
      }
       while (!(i === last));
    var tmp_0 = this.sections_1.get_fkrdnv_k$(0);
    var tmp$ret$6;
    // Inline function 'kotlin.math.pow' call
    var tmp3_pow = order - 1 | 0;
    tmp$ret$6 = Math.pow(2.0, tmp3_pow);
    tmp_0.timesEqualsReal(1.0 / (tmp$ret$6 * epsilon));
  }
  AnalogChebyshevI.$metadata$ = classMeta('AnalogChebyshevI', undefined, undefined, undefined, undefined, AnalogPrototype.prototype);
  function AnalogChebyshevII(order, epsilon) {
    AnalogPrototype.call(this);
    var tmp$ret$0;
    // Inline function 'kotlin.math.sqrt' call
    var tmp0_sqrt = 1.0 + epsilon * epsilon;
    tmp$ret$0 = Math.sqrt(tmp0_sqrt);
    var alpha = (1.0 + tmp$ret$0) / epsilon;
    var tmp$ret$1;
    // Inline function 'kotlin.math.pow' call
    var tmp1_pow = 1.0 / order;
    tmp$ret$1 = Math.pow(alpha, tmp1_pow);
    var p = tmp$ret$1;
    var a = 0.5 * (p - 1 / p);
    var b = 0.5 * (p + 1 / p);
    println('alpha: ' + alpha);
    println('p:     ' + p);
    println('a:     ' + a);
    println('b:     ' + b);
    var nRealPoles = order - imul(2, order / 2 | 0) | 0;
    var nComplexPolePairs = order / 2 | 0;
    var nPoles = nRealPoles + imul(2, nComplexPolePairs) | 0;
    if (nRealPoles === 1) {
      var tmp$ret$2;
      // Inline function 'kotlin.doubleArrayOf' call
      var tmp2_doubleArrayOf = new Float64Array([1.0 / a, 1.0]);
      tmp$ret$2 = tmp2_doubleArrayOf;
      var td = tmp$ret$2;
      this.addSection(Rational_ofPolynomials(Polynomial_ofConstant(1.0), Polynomial_ofArray(td)));
    }
    var dAngle = get_PI() / nPoles;
    var inductionVariable = 0;
    var last = nComplexPolePairs - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var angle = -get_PI() / 2 + dAngle / 2 * (1 + nRealPoles | 0) + i * dAngle;
        var tmp = Companion_getInstance_8();
        var tmp$ret$3;
        // Inline function 'kotlin.math.sin' call
        tmp$ret$3 = Math.sin(angle);
        var tmp_0 = a * tmp$ret$3;
        var tmp$ret$4;
        // Inline function 'kotlin.math.cos' call
        tmp$ret$4 = Math.cos(angle);
        var pole = tmp.divideRealComplex(1.0, new Complex(tmp_0, b * tmp$ret$4));
        var tmp$ret$5;
        // Inline function 'kotlin.doubleArrayOf' call
        var tmp3_doubleArrayOf = new Float64Array([pole.real() * pole.real() + pole.imag() * pole.imag(), -2 * pole.real(), 1.0]);
        tmp$ret$5 = tmp3_doubleArrayOf;
        var td_0 = tmp$ret$5;
        var tmp$ret$6;
        // Inline function 'kotlin.math.cos' call
        var tmp4_cos = (imul(2, i) + 1 | 0) * get_PI() / imul(2, order);
        tmp$ret$6 = Math.cos(tmp4_cos);
        var zeroimag = 1.0 / tmp$ret$6;
        var tmp$ret$7;
        // Inline function 'kotlin.doubleArrayOf' call
        var tmp5_doubleArrayOf = new Float64Array([zeroimag * zeroimag, 0.0, 1.0]);
        tmp$ret$7 = tmp5_doubleArrayOf;
        var tn = tmp$ret$7;
        this.addSection(Rational_ofPolynomials(Polynomial_ofArray(tn), Polynomial_ofArray(td_0)));
      }
       while (!(i === last));
    var DCvalue = this.evaluate(0.0).abs();
    this.sections_1.get_fkrdnv_k$(0).timesEqualsReal(1.0 / DCvalue);
  }
  AnalogChebyshevII.$metadata$ = classMeta('AnalogChebyshevII', undefined, undefined, undefined, undefined, AnalogPrototype.prototype);
  function _set__T__dl8vxa($this, _set____db54di) {
    $this._T_1 = _set____db54di;
  }
  function _get__T__ndbvbq($this) {
    return $this._T_1;
  }
  function lptobpFactors($this, P, BW, prod) {
    var p = P.coefficients();
    var c = p[0] / p[2];
    var b = p[1] / p[2];
    var discriminant = b * b - 4 * c;
    var t0;
    var t1;
    if (discriminant >= 0.0) {
      var tmp = -b;
      var tmp$ret$0;
      // Inline function 'kotlin.math.sqrt' call
      tmp$ret$0 = Math.sqrt(discriminant);
      var root = (tmp + tmp$ret$0) / 2.0;
      var f1 = root * BW / 2.0;
      var f2 = f1 * f1 - prod;
      var C = Complex_fromReal(f1).plusComplex(Companion_getInstance_8().sqrt(Complex_fromReal(f2)));
      var tmp$ret$1;
      // Inline function 'kotlin.doubleArrayOf' call
      var tmp0_doubleArrayOf = new Float64Array([C.conjugate().timesComplex(C).real(), -2.0 * C.real(), 1.0]);
      tmp$ret$1 = tmp0_doubleArrayOf;
      t0 = Polynomial_ofArray(tmp$ret$1);
      var tmp_0 = -b;
      var tmp$ret$2;
      // Inline function 'kotlin.math.sqrt' call
      tmp$ret$2 = Math.sqrt(discriminant);
      root = (tmp_0 - tmp$ret$2) / 2.0;
      f1 = root * BW / 2.0;
      f2 = f1 * f1 - prod;
      C = Complex_fromReal(f1).plusComplex(Companion_getInstance_8().sqrt(Complex_fromReal(f2)));
      var tmp$ret$3;
      // Inline function 'kotlin.doubleArrayOf' call
      var tmp1_doubleArrayOf = new Float64Array([C.conjugate().timesComplex(C).real(), -2.0 * C.real(), 1.0]);
      tmp$ret$3 = tmp1_doubleArrayOf;
      t1 = Polynomial_ofArray(tmp$ret$3);
    } else {
      var tmp_1 = -b / 2.0;
      var tmp$ret$4;
      // Inline function 'kotlin.math.sqrt' call
      var tmp2_sqrt = -discriminant;
      tmp$ret$4 = Math.sqrt(tmp2_sqrt);
      var root_0 = new Complex(tmp_1, tmp$ret$4 / 2.0);
      var f1_0 = root_0.timesReal(BW / 2.0);
      var f2_0 = f1_0.timesComplex(f1_0).minusReal(prod);
      var C_0 = f1_0.plusComplex(Companion_getInstance_8().sqrt(f2_0));
      var tmp$ret$5;
      // Inline function 'kotlin.doubleArrayOf' call
      var tmp3_doubleArrayOf = new Float64Array([C_0.conjugate().timesComplex(C_0).real(), -2.0 * C_0.real(), 1.0]);
      tmp$ret$5 = tmp3_doubleArrayOf;
      t0 = Polynomial_ofArray(tmp$ret$5);
      C_0 = f1_0.minusComplex(Companion_getInstance_8().sqrt(f2_0));
      var tmp$ret$6;
      // Inline function 'kotlin.doubleArrayOf' call
      var tmp4_doubleArrayOf = new Float64Array([C_0.conjugate().timesComplex(C_0).real(), -2.0 * C_0.real(), 1.0]);
      tmp$ret$6 = tmp4_doubleArrayOf;
      t1 = Polynomial_ofArray(tmp$ret$6);
    }
    var tmp$ret$9;
    // Inline function 'kotlin.arrayOf' call
    var tmp5_arrayOf = [Polynomial_ofPolynomial(t0), Polynomial_ofPolynomial(t1)];
    var tmp$ret$8;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$7;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$7 = tmp5_arrayOf;
    tmp$ret$8 = tmp$ret$7;
    tmp$ret$9 = tmp$ret$8;
    return tmp$ret$9;
  }
  function AnalogPrototype() {
    this._T_1 = null;
    this.sections_1 = ArrayList_init_$Create$();
  }
  AnalogPrototype.prototype.set_sections_8qbcpz_k$ = function (_set____db54di) {
    this.sections_1 = _set____db54di;
  };
  AnalogPrototype.prototype.get_sections_g4k5xl_k$ = function () {
    return this.sections_1;
  };
  AnalogPrototype.prototype.get_T_1mhr57_k$ = function () {
    if (this._T_1 == null) {
      this._T_1 = this.computeTransferFunction();
    }
    var tmp0_elvis_lhs = this._T_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw RuntimeException_init_$Create$('SHould not happen, _T is null');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  AnalogPrototype.prototype.addSection = function (R) {
    this.sections_1.add_1j60pz_k$(R);
    this._T_1 = null;
  };
  AnalogPrototype.prototype.nSections = function () {
    return this.sections_1.get_size_woubt6_k$();
  };
  AnalogPrototype.prototype.getSection = function (index) {
    return Rational_ofRational(this.sections_1.get_fkrdnv_k$(index));
  };
  AnalogPrototype.prototype.lptolp = function (omega0) {
    var tmp$ret$0;
    // Inline function 'kotlin.doubleArrayOf' call
    tmp$ret$0 = new Float64Array([0.0, 1.0]);
    var tn = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.doubleArrayOf' call
    tmp$ret$1 = new Float64Array([omega0]);
    var td = tmp$ret$1;
    var T = Rational_ofArrays(tn, td);
    var retval = new AnalogPrototype();
    var inductionVariable = 0;
    var last = this.sections_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        retval.addSection(this.sections_1.get_fkrdnv_k$(i).mapRational(T));
      }
       while (inductionVariable <= last);
    return retval;
  };
  AnalogPrototype.prototype.lptohp = function (omega0) {
    var tmp$ret$0;
    // Inline function 'kotlin.doubleArrayOf' call
    tmp$ret$0 = new Float64Array([omega0]);
    var tn = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.doubleArrayOf' call
    tmp$ret$1 = new Float64Array([0.0, 1.0]);
    var td = tmp$ret$1;
    var T = Rational_ofArrays(tn, td);
    var retval = new AnalogPrototype();
    var inductionVariable = 0;
    var last = this.sections_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        retval.addSection(this.sections_1.get_fkrdnv_k$(i).mapRational(T));
      }
       while (inductionVariable <= last);
    return retval;
  };
  AnalogPrototype.prototype.lptobp = function (omega1, omega2) {
    var BW = omega2 - omega1;
    var prod = omega1 * omega2;
    var tmp$ret$0;
    // Inline function 'kotlin.doubleArrayOf' call
    tmp$ret$0 = new Float64Array([prod, 0.0, 1.0]);
    var tn = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.doubleArrayOf' call
    tmp$ret$1 = new Float64Array([0.0, BW]);
    var td = tmp$ret$1;
    var T = Rational_ofArrays(tn, td);
    var retval = new AnalogPrototype();
    var A = 1.0;
    var inductionVariable = 0;
    var last = this.sections_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var section = this.sections_1.get_fkrdnv_k$(i);
        var Tsection = section.mapRational(T);
        A = A * Tsection.canonicalForm();
        var order = section.order();
        if (order[0] < 2 ? order[1] < 2 : false) {
          retval.addSection(Tsection);
        } else if (order[1] === 2) {
          var DT = lptobpFactors(this, section.denominator(), BW, prod);
          var tmp$ret$2;
          // Inline function 'kotlin.doubleArrayOf' call
          tmp$ret$2 = new Float64Array([0.0, 1.0]);
          var t1 = tmp$ret$2;
          if (order[0] === 0) {
            retval.addSection(Rational_ofPolynomials(Polynomial_ofArray(t1), DT[0]));
            retval.addSection(Rational_ofPolynomials(Polynomial_ofArray(t1), DT[1]));
          } else if (order[0] === 1) {
            retval.addSection(Rational_ofPolynomials(Polynomial_ofArray(t1), DT[0]));
            var t2 = new Float64Array(3);
            var tc = Tsection.numerator().coefficients();
            var inductionVariable_0 = 0;
            if (inductionVariable_0 <= 2)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                t2[j] = tc[j + 1 | 0];
              }
               while (inductionVariable_0 <= 2);
            retval.addSection(Rational_ofPolynomials(Polynomial_ofArray(t2), DT[1]));
          } else if (order[0] === 2) {
            var NT = lptobpFactors(this, section.numerator(), BW, prod);
            retval.addSection(Rational_ofPolynomials(NT[0], DT[0]));
            retval.addSection(Rational_ofPolynomials(NT[1], DT[1]));
          }
        }
      }
       while (inductionVariable <= last);
    retval.sections_1.get_fkrdnv_k$(0).timesEqualsReal(A);
    return retval;
  };
  AnalogPrototype.prototype.computeTransferFunction = function () {
    var T = Rational_ofConstant(1.0);
    var inductionVariable = 0;
    var last = this.sections_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        T.timesEqualsRational(this.sections_1.get_fkrdnv_k$(i));
      }
       while (inductionVariable <= last);
    return T;
  };
  AnalogPrototype.prototype.get_transferFunction_b52pik_k$ = function () {
    return Rational_ofRational(this.T);
  };
  AnalogPrototype.prototype.evaluate = function (omega) {
    return this.T.evaluateComplex(new Complex(0.0, omega));
  };
  AnalogPrototype.prototype.groupDelay = function (omega) {
    return this.T.groupDelay(omega);
  };
  AnalogPrototype.prototype.toString = function () {
    var out = 'AnalogPrototype: \n';
    var inductionVariable = 0;
    var last = this.sections_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        out = out + ('  section ' + i + ':' + new Char(_Char___init__impl__6a9atx(10)));
        out = out + this.sections_1.get_fkrdnv_k$(i);
      }
       while (inductionVariable <= last);
    return out;
  };
  AnalogPrototype.$metadata$ = classMeta('AnalogPrototype');
  Object.defineProperty(AnalogPrototype.prototype, 'sections', {
    configurable: true,
    get: AnalogPrototype.prototype.get_sections_g4k5xl_k$,
    set: AnalogPrototype.prototype.set_sections_8qbcpz_k$
  });
  Object.defineProperty(AnalogPrototype.prototype, 'T', {
    configurable: true,
    get: AnalogPrototype.prototype.get_T_1mhr57_k$
  });
  Object.defineProperty(AnalogPrototype.prototype, 'transferFunction', {
    configurable: true,
    get: AnalogPrototype.prototype.get_transferFunction_b52pik_k$
  });
  function Butterworth(order, type, f1, f2, delta) {
    IIRFilter.call(this, new AnalogButterworth(order), type, f1, f2, delta);
  }
  Butterworth.$metadata$ = classMeta('Butterworth', undefined, undefined, undefined, undefined, IIRFilter.prototype);
  function ChebyshevI(order, epsilon, type, f1, f2, delta) {
    IIRFilter.call(this, new AnalogChebyshevI(order, epsilon), type, f1, f2, delta);
  }
  ChebyshevI.$metadata$ = classMeta('ChebyshevI', undefined, undefined, undefined, undefined, IIRFilter.prototype);
  function ChebyshevII(order, epsilon, type, f1, f2, delta) {
    IIRFilter.call(this, new AnalogChebyshevII(order, epsilon), type, f1, f2, delta);
  }
  ChebyshevII.$metadata$ = classMeta('ChebyshevII', undefined, undefined, undefined, undefined, IIRFilter.prototype);
  function _set_real__9t9mrd($this, _set____db54di) {
    $this.real_1 = _set____db54di;
  }
  function _get_real__dd1mct($this) {
    return $this.real_1;
  }
  function _set_imag__9ogl71($this, _set____db54di) {
    $this.imag_1 = _set____db54di;
  }
  function _get_imag__d88ksh($this) {
    return $this.imag_1;
  }
  function Complex_init_$Init$(real, $this) {
    Complex.call($this, real, 0.0);
    return $this;
  }
  function Complex_fromReal(real) {
    return Complex_init_$Init$(real, Object.create(Complex.prototype));
  }
  function Companion_8() {
    Companion_instance_8 = this;
  }
  Companion_8.prototype.ComplexFromPolar = function (r, phi) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.cos' call
    tmp$ret$0 = Math.cos(phi);
    var tmp = r * tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.sin' call
    tmp$ret$1 = Math.sin(phi);
    return new Complex(tmp, r * tmp$ret$1);
  };
  Companion_8.prototype.addRealComplex = function (a, c) {
    return new Complex(a + c.real_1, c.imag_1);
  };
  Companion_8.prototype.addComplexReal = function (c, a) {
    return this.addRealComplex(a, c);
  };
  Companion_8.prototype.subtractComplexReal = function (c, a) {
    return new Complex(c.real_1 - a, c.imag_1);
  };
  Companion_8.prototype.subtractRealComplex = function (a, c) {
    return new Complex(a - c.real_1, c.imag_1);
  };
  Companion_8.prototype.unaryMinus = function (c) {
    return new Complex(-c.real_1, -c.imag_1);
  };
  Companion_8.prototype.multiplyRealComplex = function (a, c) {
    return new Complex(a * c.real_1, a * c.imag_1);
  };
  Companion_8.prototype.multiplyComplexReal = function (c, a) {
    return this.multiplyRealComplex(a, c);
  };
  Companion_8.prototype.addComplexComplex = function (c1, c2) {
    return new Complex(c1.real_1 + c2.real_1, c1.imag_1 + c2.imag_1);
  };
  Companion_8.prototype.subtractComplexComplex = function (c1, c2) {
    return new Complex(c1.real_1 - c2.real_1, c1.imag_1 - c2.imag_1);
  };
  Companion_8.prototype.multiplyComplexComplex = function (c1, c2) {
    return new Complex(c1.real_1 * c2.real_1 - c1.imag_1 * c2.imag_1, c1.real_1 * c2.imag_1 + c1.imag_1 * c2.real_1);
  };
  Companion_8.prototype.divideComplexReal = function (c, a) {
    return new Complex(c.real_1 / a, c.imag_1 / a);
  };
  Companion_8.prototype.divideRealComplex = function (a, c) {
    var scale = c.real_1 * c.real_1 + c.imag_1 * c.imag_1;
    return new Complex(a * c.real_1 / scale, a * -c.imag_1 / scale);
  };
  Companion_8.prototype.divideComplexComplex = function (c1, c2) {
    var scale = c2.real_1 * c2.real_1 + c2.imag_1 * c2.imag_1;
    return new Complex((c1.real_1 * c2.real_1 + c1.imag_1 * c2.imag_1) / scale, (c1.imag_1 * c2.real_1 - c1.real_1 * c2.imag_1) / scale);
  };
  Companion_8.prototype.sqrt = function (c) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.sqrt' call
    var tmp0_sqrt = this.abs(c);
    tmp$ret$0 = Math.sqrt(tmp0_sqrt);
    return this.ComplexFromPolar(tmp$ret$0, this.angle(c) / 2.0);
  };
  Companion_8.prototype.abs = function (c) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.sqrt' call
    var tmp0_sqrt = c.real_1 * c.real_1 + c.imag_1 * c.imag_1;
    tmp$ret$0 = Math.sqrt(tmp0_sqrt);
    return tmp$ret$0;
  };
  Companion_8.prototype.angle = function (c) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.atan2' call
    var tmp0_atan2 = c.imag_1;
    var tmp1_atan2 = c.real_1;
    tmp$ret$0 = Math.atan2(tmp0_atan2, tmp1_atan2);
    return tmp$ret$0;
  };
  Companion_8.prototype.exp = function (c) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.exp' call
    var tmp0_exp = c.real_1;
    tmp$ret$0 = Math.exp(tmp0_exp);
    var r = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.math.cos' call
    var tmp1_cos = c.imag_1;
    tmp$ret$1 = Math.cos(tmp1_cos);
    var tmp = r * tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.math.sin' call
    var tmp2_sin = c.imag_1;
    tmp$ret$2 = Math.sin(tmp2_sin);
    return new Complex(tmp, r * tmp$ret$2);
  };
  Companion_8.prototype.conjugate = function (c) {
    return new Complex(c.real_1, -c.imag_1);
  };
  Companion_8.$metadata$ = objectMeta('Companion');
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function Complex(realpart, imagpart) {
    Companion_getInstance_8();
    this.real_1 = realpart;
    this.imag_1 = imagpart;
  }
  Complex.prototype.real = function () {
    return this.real_1;
  };
  Complex.prototype.imag = function () {
    return this.imag_1;
  };
  Complex.prototype.abs = function () {
    return Companion_getInstance_8().abs(this);
  };
  Complex.prototype.angle = function () {
    return Companion_getInstance_8().angle(this);
  };
  Complex.prototype.timesComplex = function (c) {
    return Companion_getInstance_8().multiplyComplexComplex(this, c);
  };
  Complex.prototype.timesReal = function (a) {
    return Companion_getInstance_8().multiplyComplexReal(this, a);
  };
  Complex.prototype.conjugate = function () {
    return Companion_getInstance_8().conjugate(this);
  };
  Complex.prototype.plusComplex = function (c) {
    return Companion_getInstance_8().addComplexComplex(this, c);
  };
  Complex.prototype.plusReal = function (a) {
    return Companion_getInstance_8().addComplexReal(this, a);
  };
  Complex.prototype.minusComplex = function (c) {
    return Companion_getInstance_8().subtractComplexComplex(this, c);
  };
  Complex.prototype.minusReal = function (a) {
    return Companion_getInstance_8().subtractComplexReal(this, a);
  };
  Complex.prototype.overReal = function (a) {
    return Companion_getInstance_8().divideComplexReal(this, a);
  };
  Complex.prototype.overComplex = function (c) {
    return Companion_getInstance_8().divideComplexComplex(this, c);
  };
  Complex.prototype.plusEqualsReal = function (a) {
    var tmp0_this = this;
    tmp0_this.real_1 = tmp0_this.real_1 + a;
  };
  Complex.prototype.plusEqualsComplex = function (c) {
    var tmp0_this = this;
    tmp0_this.real_1 = tmp0_this.real_1 + c.real_1;
    var tmp1_this = this;
    tmp1_this.imag_1 = tmp1_this.imag_1 + c.imag_1;
  };
  Complex.prototype.minusEqualsReal = function (a) {
    var tmp0_this = this;
    tmp0_this.real_1 = tmp0_this.real_1 - a;
  };
  Complex.prototype.minusEqualsComplex = function (c) {
    var tmp0_this = this;
    tmp0_this.real_1 = tmp0_this.real_1 - c.real_1;
    var tmp1_this = this;
    tmp1_this.imag_1 = tmp1_this.imag_1 - c.imag_1;
  };
  Complex.prototype.timesEqualsReal = function (a) {
    var tmp0_this = this;
    tmp0_this.real_1 = tmp0_this.real_1 * a;
    var tmp1_this = this;
    tmp1_this.imag_1 = tmp1_this.imag_1 * a;
  };
  Complex.prototype.timesEqualsComplex = function (c) {
    var tmp = this.real_1 * c.real_1 - this.imag_1 * c.imag_1;
    this.imag_1 = this.real_1 * c.imag_1 + this.imag_1 * c.real_1;
    this.real_1 = tmp;
  };
  Complex.prototype.divideEqualsReal = function (a) {
    var tmp0_this = this;
    tmp0_this.real_1 = tmp0_this.real_1 / a;
    var tmp1_this = this;
    tmp1_this.imag_1 = tmp1_this.imag_1 / a;
  };
  Complex.prototype.divideEqualsComplex = function (c) {
    var scale = c.real_1 * c.real_1 + c.imag_1 * c.imag_1;
    var tmp = c.real_1 * this.real_1 + c.imag_1 * this.imag_1;
    this.imag_1 = c.real_1 * this.imag_1 - c.imag_1 * this.real_1;
    this.real_1 = tmp;
    this.divideEqualsReal(scale);
  };
  Complex.prototype.toString = function () {
    return '' + this.real_1 + '  +  i * ' + this.imag_1 + '\n';
  };
  Complex.$metadata$ = classMeta('Complex');
  function warp($this, f, delta) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.tan' call
    var tmp0_tan = get_PI() * f * delta;
    tmp$ret$0 = Math.tan(tmp0_tan);
    return tmp$ret$0;
  }
  function IIRFilter(baseFilter, type, f1, f2, delta) {
    this.delta_1 = delta;
    this.f1__1 = f1;
    this.f2__1 = f2;
    var prototype;
    var tmp0_subject = type;
    var tmp0 = tmp0_subject.ordinal_1;
    switch (tmp0) {
      case 0:
        prototype = baseFilter.lptolp(warp(this, f2, delta));
        break;
      case 1:
        prototype = baseFilter.lptobp(warp(this, f1, delta), warp(this, f2, delta));
        break;
      case 2:
        prototype = baseFilter.lptohp(warp(this, f1, delta));
        break;
      default:
        throw IllegalStateException_init_$Create$('Undefined passband type');
    }
    var tn = new Float64Array(2);
    var td = new Float64Array(2);
    tn[0] = 1.0;
    tn[1] = -1.0;
    td[0] = 1.0;
    td[1] = 1.0;
    var S = Rational_ofArrays(tn, td);
    this.T_1 = Rational_ofConstant(1.0);
    this.sections_1 = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = prototype.nSections() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var R = prototype.getSection(i).mapRational(S);
        this.T_1.timesEqualsRational(R);
        var cn = R.numerator().coefficients();
        var cd = R.denominator().coefficients();
        var s = 1.0;
        if (!(cd[0] === 0.0))
          s = cd[0];
        var b0 = cn[0] / s;
        var b1 = 0.0;
        if (cn.length >= 2)
          b1 = cn[1] / s;
        var b2 = 0.0;
        if (cn.length >= 3)
          b2 = cn[2] / s;
        var a1 = 0.0;
        if (cd.length >= 2)
          a1 = cd[1] / s;
        var a2 = 0.0;
        if (cd.length >= 3)
          a2 = cd[2] / s;
        this.sections_1.add_1j60pz_k$(new SecondOrderSection(b0, b1, b2, a1, a2));
      }
       while (!(i === last));
  }
  IIRFilter.prototype.set_sections_7e6foy_k$ = function (_set____db54di) {
    this.sections_1 = _set____db54di;
  };
  IIRFilter.prototype.get_sections_g4k5xl_k$ = function () {
    return this.sections_1;
  };
  IIRFilter.prototype.set_T_dortqy_k$ = function (_set____db54di) {
    this.T_1 = _set____db54di;
  };
  IIRFilter.prototype.get_T_1mhr57_k$ = function () {
    return this.T_1;
  };
  IIRFilter.prototype.get_delta_iq7nnz_k$ = function () {
    return this.delta_1;
  };
  IIRFilter.prototype.get_f1_knto18_k$ = function () {
    return this.f1__1;
  };
  IIRFilter.prototype.get_f2_knto17_k$ = function () {
    return this.f2__1;
  };
  IIRFilter.prototype.initialize = function () {
    var inductionVariable = 0;
    var last = this.sections_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.sections_1.get_fkrdnv_k$(i).initialize_oabr29_k$();
      }
       while (inductionVariable <= last);
  };
  IIRFilter.prototype.getDelta = function () {
    return this.delta_1;
  };
  IIRFilter.prototype.getLowCorner = function () {
    return this.f1__1;
  };
  IIRFilter.prototype.getHighCorner = function () {
    return this.f2__1;
  };
  IIRFilter.prototype.filterNextSample = function (x) {
    var retval = this.sections_1.get_fkrdnv_k$(0).filterSingle(x);
    var inductionVariable = 1;
    var last = this.sections_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        retval = this.sections_1.get_fkrdnv_k$(i).filterSingle(retval);
      }
       while (!(i === last));
    return retval;
  };
  IIRFilter.prototype.filter = function (x, y) {
    var inductionVariable = 0;
    var last = y.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        y[i] = 0.0;
      }
       while (inductionVariable <= last);
    this.sections_1.get_fkrdnv_k$(0).filter(x, y);
    var inductionVariable_0 = 1;
    var last_0 = this.sections_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        this.sections_1.get_fkrdnv_k$(i_0).filter(y, y);
      }
       while (!(i_0 === last_0));
  };
  IIRFilter.prototype.filterInPlace = function (x) {
    var tmp0_iterator = this.sections_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var section = tmp0_iterator.next_20eer_k$();
      section.filter(x, x);
    }
  };
  IIRFilter.prototype.evaluate = function (Omega) {
    var ejOmega = Companion_getInstance_8().exp(new Complex(0.0, -Omega));
    return this.T_1.evaluateComplex(ejOmega);
  };
  IIRFilter.prototype.groupDelay = function (Omega) {
    return this.T_1.discreteTimeGroupDelay(Omega);
  };
  IIRFilter.prototype.toString = function () {
    var out = 'IIR Filter:\n';
    var inductionVariable = 0;
    var last = this.sections_1.get_size_woubt6_k$() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        out = out + ('\n  Section ' + i + '\n');
        out = out + this.sections_1.get_fkrdnv_k$(i);
        out = out + new Char(_Char___init__impl__6a9atx(10));
      }
       while (inductionVariable <= last);
    return out;
  };
  IIRFilter.$metadata$ = classMeta('IIRFilter');
  Object.defineProperty(IIRFilter.prototype, 'sections', {
    configurable: true,
    get: IIRFilter.prototype.get_sections_g4k5xl_k$,
    set: IIRFilter.prototype.set_sections_7e6foy_k$
  });
  Object.defineProperty(IIRFilter.prototype, 'T', {
    configurable: true,
    get: IIRFilter.prototype.get_T_1mhr57_k$,
    set: IIRFilter.prototype.set_T_dortqy_k$
  });
  Object.defineProperty(IIRFilter.prototype, 'delta', {
    configurable: true,
    get: IIRFilter.prototype.get_delta_iq7nnz_k$
  });
  Object.defineProperty(IIRFilter.prototype, 'f1', {
    configurable: true,
    get: IIRFilter.prototype.get_f1_knto18_k$
  });
  Object.defineProperty(IIRFilter.prototype, 'f2', {
    configurable: true,
    get: IIRFilter.prototype.get_f2_knto17_k$
  });
  var PassbandType_LOWPASS_instance;
  var PassbandType_BANDPASS_instance;
  var PassbandType_HIGHPASS_instance;
  function values() {
    return [PassbandType_LOWPASS_getInstance(), PassbandType_BANDPASS_getInstance(), PassbandType_HIGHPASS_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'LOWPASS':
        return PassbandType_LOWPASS_getInstance();
      case 'BANDPASS':
        return PassbandType_BANDPASS_getInstance();
      case 'HIGHPASS':
        return PassbandType_HIGHPASS_getInstance();
      default:
        PassbandType_initEntries();
        THROW_ISE();
        break;
    }
  }
  var PassbandType_entriesInitialized;
  function PassbandType_initEntries() {
    if (PassbandType_entriesInitialized)
      return Unit_getInstance();
    PassbandType_entriesInitialized = true;
    PassbandType_LOWPASS_instance = new PassbandType('LOWPASS', 0);
    PassbandType_BANDPASS_instance = new PassbandType('BANDPASS', 1);
    PassbandType_HIGHPASS_instance = new PassbandType('HIGHPASS', 2);
  }
  function PassbandType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  PassbandType.$metadata$ = classMeta('PassbandType', undefined, undefined, undefined, undefined, Enum.prototype);
  Object.defineProperty(PassbandType.prototype, 'name', {
    configurable: true,
    get: PassbandType.prototype.get_name_woqyms_k$
  });
  Object.defineProperty(PassbandType.prototype, 'ordinal', {
    configurable: true,
    get: PassbandType.prototype.get_ordinal_ip24qg_k$
  });
  function PassbandType_LOWPASS_getInstance() {
    PassbandType_initEntries();
    return PassbandType_LOWPASS_instance;
  }
  function PassbandType_BANDPASS_getInstance() {
    PassbandType_initEntries();
    return PassbandType_BANDPASS_instance;
  }
  function PassbandType_HIGHPASS_getInstance() {
    PassbandType_initEntries();
    return PassbandType_HIGHPASS_instance;
  }
  function SecondOrderSection(b0, b1, b2, a1, a2) {
    this.b0__1 = b0;
    this.b1__1 = b1;
    this.b2__1 = b2;
    this.a1__1 = a1;
    this.a2__1 = a2;
    this.s1__1 = 0.0;
    this.s2__1 = 0.0;
    this.initialize_oabr29_k$();
  }
  SecondOrderSection.prototype.set_b0_6y8ao7_k$ = function (_set____db54di) {
    this.b0__1 = _set____db54di;
  };
  SecondOrderSection.prototype.get_b0_knto4p_k$ = function () {
    return this.b0__1;
  };
  SecondOrderSection.prototype.set_b1_15dfpi_k$ = function (_set____db54di) {
    this.b1__1 = _set____db54di;
  };
  SecondOrderSection.prototype.get_b1_knto4o_k$ = function () {
    return this.b1__1;
  };
  SecondOrderSection.prototype.set_b2_4nhf97_k$ = function (_set____db54di) {
    this.b2__1 = _set____db54di;
  };
  SecondOrderSection.prototype.get_b2_knto4n_k$ = function () {
    return this.b2__1;
  };
  SecondOrderSection.prototype.set_a1_w3e2cb_k$ = function (_set____db54di) {
    this.a1__1 = _set____db54di;
  };
  SecondOrderSection.prototype.get_a1_knto5j_k$ = function () {
    return this.a1__1;
  };
  SecondOrderSection.prototype.set_a2_x4v4o4_k$ = function (_set____db54di) {
    this.a2__1 = _set____db54di;
  };
  SecondOrderSection.prototype.get_a2_knto5i_k$ = function () {
    return this.a2__1;
  };
  SecondOrderSection.prototype.set_s1_1yjh8p_k$ = function (_set____db54di) {
    this.s1__1 = _set____db54di;
  };
  SecondOrderSection.prototype.get_s1_kntnq1_k$ = function () {
    return this.s1__1;
  };
  SecondOrderSection.prototype.set_s2_7rec7e_k$ = function (_set____db54di) {
    this.s2__1 = _set____db54di;
  };
  SecondOrderSection.prototype.get_s2_kntnq0_k$ = function () {
    return this.s2__1;
  };
  SecondOrderSection.prototype.initialize_oabr29_k$ = function () {
    this.s1__1 = 0.0;
    this.s2__1 = 0.0;
  };
  SecondOrderSection.prototype.filterSingle = function (x) {
    var s0 = x - this.a1__1 * this.s1__1 - this.a2__1 * this.s2__1;
    var retval = this.b0__1 * s0 + this.b1__1 * this.s1__1 + this.b2__1 * this.s2__1;
    this.s2__1 = this.s1__1;
    this.s1__1 = s0;
    return retval;
  };
  SecondOrderSection.prototype.filter = function (x, y) {
    var s0;
    var tmp$ret$0;
    // Inline function 'kotlin.math.min' call
    var tmp0_min = x.length;
    var tmp1_min = y.length;
    tmp$ret$0 = Math.min(tmp0_min, tmp1_min);
    var n = tmp$ret$0;
    var inductionVariable = 0;
    var last = n - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        s0 = x[i] - this.a1__1 * this.s1__1 - this.a2__1 * this.s2__1;
        y[i] = this.b0__1 * s0 + this.b1__1 * this.s1__1 + this.b2__1 * this.s2__1;
        this.s2__1 = this.s1__1;
        this.s1__1 = s0;
      }
       while (!(i === last));
  };
  SecondOrderSection.prototype.toString = function () {
    var out = '  coefficients: \n';
    out = out + ('    b0: ' + this.b0__1 + new Char(_Char___init__impl__6a9atx(10)));
    out = out + ('    b1: ' + this.b1__1 + new Char(_Char___init__impl__6a9atx(10)));
    out = out + ('    b2: ' + this.b2__1 + new Char(_Char___init__impl__6a9atx(10)));
    out = out + new Char(_Char___init__impl__6a9atx(10));
    out = out + ('    a1: ' + this.a1__1 + new Char(_Char___init__impl__6a9atx(10)));
    out = out + ('    a2: ' + this.a2__1 + new Char(_Char___init__impl__6a9atx(10)));
    out = out + '\n  states:  \n';
    out = out + ('    s1: ' + this.s1__1 + new Char(_Char___init__impl__6a9atx(10)));
    out = out + ('    s2: ' + this.s2__1 + new Char(_Char___init__impl__6a9atx(10)));
    return out;
  };
  SecondOrderSection.$metadata$ = classMeta('SecondOrderSection');
  function factorial($this, n) {
    var retval = 1;
    if (n > 1) {
      var inductionVariable = 2;
      if (inductionVariable <= n)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          retval = imul(retval, i);
        }
         while (!(i === n));
    }
    return retval;
  }
  function ThiranAllpass(N, D) {
    Allpass.call(this, N);
    var a = new Float64Array(N + 1 | 0);
    a[0] = 1.0;
    var inductionVariable = 1;
    if (inductionVariable <= N)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var prod = 1.0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 <= N)
          do {
            var n = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            prod = prod * ((D - N + n) / (D - N + i + n));
          }
           while (!(n === N));
        var tmp$ret$0;
        // Inline function 'kotlin.math.pow' call
        var tmp0_pow = i;
        tmp$ret$0 = Math.pow(-1.0, tmp0_pow);
        a[i] = tmp$ret$0 * (factorial(this, N) / imul(factorial(this, N - i | 0), factorial(this, i)) | 0) * prod;
      }
       while (!(i === N));
    var P = Polynomial_ofArray(a);
    this.k_1 = P.reflectionCoefficients();
    this.constructRationalRepresentation();
  }
  ThiranAllpass.$metadata$ = classMeta('ThiranAllpass', undefined, undefined, undefined, undefined, Allpass.prototype);
  //region block: exports
  function $jsExportAll$(_) {
    var $com = _.com || (_.com = {});
    var $com$oregondsp = $com.oregondsp || ($com.oregondsp = {});
    var $com$oregondsp$signalProcessing = $com$oregondsp.signalProcessing || ($com$oregondsp.signalProcessing = {});
    $com$oregondsp$signalProcessing.HammingWindow = HammingWindow;
    var $com = _.com || (_.com = {});
    var $com$oregondsp = $com.oregondsp || ($com.oregondsp = {});
    var $com$oregondsp$signalProcessing = $com$oregondsp.signalProcessing || ($com$oregondsp.signalProcessing = {});
    $com$oregondsp$signalProcessing.HanningWindow = HanningWindow;
    var $com = _.com || (_.com = {});
    var $com$oregondsp = $com.oregondsp || ($com.oregondsp = {});
    var $com$oregondsp$signalProcessing = $com$oregondsp.signalProcessing || ($com$oregondsp.signalProcessing = {});
    $com$oregondsp$signalProcessing.Sequence = Sequence;
    $com$oregondsp$signalProcessing.Sequence.Sequence_fromArray = Sequence_fromArray;
    $com$oregondsp$signalProcessing.Sequence.Sequence_ofSize = Sequence_ofSize;
    Object.defineProperty($com$oregondsp$signalProcessing.Sequence, 'Companion', {
      configurable: true,
      get: Companion_getInstance
    });
    var $com = _.com || (_.com = {});
    var $com$oregondsp = $com.oregondsp || ($com.oregondsp = {});
    var $com$oregondsp$signalProcessing = $com$oregondsp.signalProcessing || ($com$oregondsp.signalProcessing = {});
    $com$oregondsp$signalProcessing.Window = Window;
    $com$oregondsp$signalProcessing.Window.Window_fromArray = Window_fromArray;
    var $com = _.com || (_.com = {});
    var $com$oregondsp = $com.oregondsp || ($com.oregondsp = {});
    var $com$oregondsp$signalProcessing = $com$oregondsp.signalProcessing || ($com$oregondsp.signalProcessing = {});
    var $com$oregondsp$signalProcessing$fft = $com$oregondsp$signalProcessing.fft || ($com$oregondsp$signalProcessing.fft = {});
    $com$oregondsp$signalProcessing$fft.CDFT = CDFT;
    $com$oregondsp$signalProcessing$fft.CDFT.CDFT_ofLogSize = CDFT_ofLogSize;
    $com$oregondsp$signalProcessing$fft.CDFT.CDFT_ofArrays = CDFT_ofArrays;
    Object.defineProperty($com$oregondsp$signalProcessing$fft.CDFT, 'Companion', {
      configurable: true,
      get: Companion_getInstance_0
    });
    var $com = _.com || (_.com = {});
    var $com$oregondsp = $com.oregondsp || ($com.oregondsp = {});
    var $com$oregondsp$signalProcessing = $com$oregondsp.signalProcessing || ($com$oregondsp.signalProcessing = {});
    var $com$oregondsp$signalProcessing$fft = $com$oregondsp$signalProcessing.fft || ($com$oregondsp$signalProcessing.fft = {});
    $com$oregondsp$signalProcessing$fft.RDFT = RDFT;
    Object.defineProperty($com$oregondsp$signalProcessing$fft.RDFT, 'Companion', {
      configurable: true,
      get: Companion_getInstance_4
    });
    var $com = _.com || (_.com = {});
    var $com$oregondsp = $com.oregondsp || ($com.oregondsp = {});
    var $com$oregondsp$signalProcessing = $com$oregondsp.signalProcessing || ($com$oregondsp.signalProcessing = {});
    var $com$oregondsp$signalProcessing$filter = $com$oregondsp$signalProcessing.filter || ($com$oregondsp$signalProcessing.filter = {});
    $com$oregondsp$signalProcessing$filter.LagrangePolynomial = LagrangePolynomial;
    Object.defineProperty($com$oregondsp$signalProcessing$filter.LagrangePolynomial, 'Companion', {
      configurable: true,
      get: Companion_getInstance_5
    });
    var $com = _.com || (_.com = {});
    var $com$oregondsp = $com.oregondsp || ($com.oregondsp = {});
    var $com$oregondsp$signalProcessing = $com$oregondsp.signalProcessing || ($com$oregondsp.signalProcessing = {});
    var $com$oregondsp$signalProcessing$filter = $com$oregondsp$signalProcessing.filter || ($com$oregondsp$signalProcessing.filter = {});
    $com$oregondsp$signalProcessing$filter.Polynomial = Polynomial;
    $com$oregondsp$signalProcessing$filter.Polynomial.Polynomial_ofArray = Polynomial_ofArray;
    $com$oregondsp$signalProcessing$filter.Polynomial.Polynomial_ofPolynomial = Polynomial_ofPolynomial;
    $com$oregondsp$signalProcessing$filter.Polynomial.Polynomial_ofDegree = Polynomial_ofDegree;
    $com$oregondsp$signalProcessing$filter.Polynomial.Polynomial_ofConstant = Polynomial_ofConstant;
    var $com = _.com || (_.com = {});
    var $com$oregondsp = $com.oregondsp || ($com.oregondsp = {});
    var $com$oregondsp$signalProcessing = $com$oregondsp.signalProcessing || ($com$oregondsp.signalProcessing = {});
    var $com$oregondsp$signalProcessing$filter = $com$oregondsp$signalProcessing.filter || ($com$oregondsp$signalProcessing.filter = {});
    $com$oregondsp$signalProcessing$filter.Rational = Rational;
    $com$oregondsp$signalProcessing$filter.Rational.Rational_ofArrays = Rational_ofArrays;
    $com$oregondsp$signalProcessing$filter.Rational.Rational_ofPolynomials = Rational_ofPolynomials;
    $com$oregondsp$signalProcessing$filter.Rational.Rational_ofRational = Rational_ofRational;
    $com$oregondsp$signalProcessing$filter.Rational.Rational_ofConstant = Rational_ofConstant;
    var $com = _.com || (_.com = {});
    var $com$oregondsp = $com.oregondsp || ($com.oregondsp = {});
    var $com$oregondsp$signalProcessing = $com$oregondsp.signalProcessing || ($com$oregondsp.signalProcessing = {});
    var $com$oregondsp$signalProcessing$filter = $com$oregondsp$signalProcessing.filter || ($com$oregondsp$signalProcessing.filter = {});
    var $com$oregondsp$signalProcessing$filter$fir = $com$oregondsp$signalProcessing$filter.fir || ($com$oregondsp$signalProcessing$filter.fir = {});
    $com$oregondsp$signalProcessing$filter$fir.ComplexAnalyticSignal = ComplexAnalyticSignal;
    var $com = _.com || (_.com = {});
    var $com$oregondsp = $com.oregondsp || ($com.oregondsp = {});
    var $com$oregondsp$signalProcessing = $com$oregondsp.signalProcessing || ($com$oregondsp.signalProcessing = {});
    var $com$oregondsp$signalProcessing$filter = $com$oregondsp$signalProcessing.filter || ($com$oregondsp$signalProcessing.filter = {});
    var $com$oregondsp$signalProcessing$filter$fir = $com$oregondsp$signalProcessing$filter.fir || ($com$oregondsp$signalProcessing$filter.fir = {});
    $com$oregondsp$signalProcessing$filter$fir.Interpolator = Interpolator;
    var $com = _.com || (_.com = {});
    var $com$oregondsp = $com.oregondsp || ($com.oregondsp = {});
    var $com$oregondsp$signalProcessing = $com$oregondsp.signalProcessing || ($com$oregondsp.signalProcessing = {});
    var $com$oregondsp$signalProcessing$filter = $com$oregondsp$signalProcessing.filter || ($com$oregondsp$signalProcessing.filter = {});
    var $com$oregondsp$signalProcessing$filter$fir = $com$oregondsp$signalProcessing$filter.fir || ($com$oregondsp$signalProcessing$filter.fir = {});
    $com$oregondsp$signalProcessing$filter$fir.OverlapAdd = OverlapAdd;
    $com$oregondsp$signalProcessing$filter$fir.OverlapAdd.OverlapAdd_ofArray = OverlapAdd_ofArray;
    $com$oregondsp$signalProcessing$filter$fir.OverlapAdd.OverlapAdd_ofArrayOverlapAdd = OverlapAdd_ofArrayOverlapAdd;
    var $com = _.com || (_.com = {});
    var $com$oregondsp = $com.oregondsp || ($com.oregondsp = {});
    var $com$oregondsp$signalProcessing = $com$oregondsp.signalProcessing || ($com$oregondsp.signalProcessing = {});
    var $com$oregondsp$signalProcessing$filter = $com$oregondsp$signalProcessing.filter || ($com$oregondsp$signalProcessing.filter = {});
    var $com$oregondsp$signalProcessing$filter$fir = $com$oregondsp$signalProcessing$filter.fir || ($com$oregondsp$signalProcessing$filter.fir = {});
    var $com$oregondsp$signalProcessing$filter$fir$equiripple = $com$oregondsp$signalProcessing$filter$fir.equiripple || ($com$oregondsp$signalProcessing$filter$fir.equiripple = {});
    $com$oregondsp$signalProcessing$filter$fir$equiripple.CenteredDifferentiator = CenteredDifferentiator;
    var $com = _.com || (_.com = {});
    var $com$oregondsp = $com.oregondsp || ($com.oregondsp = {});
    var $com$oregondsp$signalProcessing = $com$oregondsp.signalProcessing || ($com$oregondsp.signalProcessing = {});
    var $com$oregondsp$signalProcessing$filter = $com$oregondsp$signalProcessing.filter || ($com$oregondsp$signalProcessing.filter = {});
    var $com$oregondsp$signalProcessing$filter$fir = $com$oregondsp$signalProcessing$filter.fir || ($com$oregondsp$signalProcessing$filter.fir = {});
    var $com$oregondsp$signalProcessing$filter$fir$equiripple = $com$oregondsp$signalProcessing$filter$fir.equiripple || ($com$oregondsp$signalProcessing$filter$fir.equiripple = {});
    $com$oregondsp$signalProcessing$filter$fir$equiripple.CenteredHilbertTransform = CenteredHilbertTransform;
    var $com = _.com || (_.com = {});
    var $com$oregondsp = $com.oregondsp || ($com.oregondsp = {});
    var $com$oregondsp$signalProcessing = $com$oregondsp.signalProcessing || ($com$oregondsp.signalProcessing = {});
    var $com$oregondsp$signalProcessing$filter = $com$oregondsp$signalProcessing.filter || ($com$oregondsp$signalProcessing.filter = {});
    var $com$oregondsp$signalProcessing$filter$fir = $com$oregondsp$signalProcessing$filter.fir || ($com$oregondsp$signalProcessing$filter.fir = {});
    var $com$oregondsp$signalProcessing$filter$fir$equiripple = $com$oregondsp$signalProcessing$filter$fir.equiripple || ($com$oregondsp$signalProcessing$filter$fir.equiripple = {});
    $com$oregondsp$signalProcessing$filter$fir$equiripple.EquirippleBandpass = EquirippleBandpass;
    var $com = _.com || (_.com = {});
    var $com$oregondsp = $com.oregondsp || ($com.oregondsp = {});
    var $com$oregondsp$signalProcessing = $com$oregondsp.signalProcessing || ($com$oregondsp.signalProcessing = {});
    var $com$oregondsp$signalProcessing$filter = $com$oregondsp$signalProcessing.filter || ($com$oregondsp$signalProcessing.filter = {});
    var $com$oregondsp$signalProcessing$filter$fir = $com$oregondsp$signalProcessing$filter.fir || ($com$oregondsp$signalProcessing$filter.fir = {});
    var $com$oregondsp$signalProcessing$filter$fir$equiripple = $com$oregondsp$signalProcessing$filter$fir.equiripple || ($com$oregondsp$signalProcessing$filter$fir.equiripple = {});
    $com$oregondsp$signalProcessing$filter$fir$equiripple.EquirippleFIRFilter = EquirippleFIRFilter;
    Object.defineProperty($com$oregondsp$signalProcessing$filter$fir$equiripple.EquirippleFIRFilter, 'Companion', {
      configurable: true,
      get: Companion_getInstance_7
    });
    var $com = _.com || (_.com = {});
    var $com$oregondsp = $com.oregondsp || ($com.oregondsp = {});
    var $com$oregondsp$signalProcessing = $com$oregondsp.signalProcessing || ($com$oregondsp.signalProcessing = {});
    var $com$oregondsp$signalProcessing$filter = $com$oregondsp$signalProcessing.filter || ($com$oregondsp$signalProcessing.filter = {});
    var $com$oregondsp$signalProcessing$filter$fir = $com$oregondsp$signalProcessing$filter.fir || ($com$oregondsp$signalProcessing$filter.fir = {});
    var $com$oregondsp$signalProcessing$filter$fir$equiripple = $com$oregondsp$signalProcessing$filter$fir.equiripple || ($com$oregondsp$signalProcessing$filter$fir.equiripple = {});
    $com$oregondsp$signalProcessing$filter$fir$equiripple.EquirippleHalfBand = EquirippleHalfBand;
    var $com = _.com || (_.com = {});
    var $com$oregondsp = $com.oregondsp || ($com.oregondsp = {});
    var $com$oregondsp$signalProcessing = $com$oregondsp.signalProcessing || ($com$oregondsp.signalProcessing = {});
    var $com$oregondsp$signalProcessing$filter = $com$oregondsp$signalProcessing.filter || ($com$oregondsp$signalProcessing.filter = {});
    var $com$oregondsp$signalProcessing$filter$fir = $com$oregondsp$signalProcessing$filter.fir || ($com$oregondsp$signalProcessing$filter.fir = {});
    var $com$oregondsp$signalProcessing$filter$fir$equiripple = $com$oregondsp$signalProcessing$filter$fir.equiripple || ($com$oregondsp$signalProcessing$filter$fir.equiripple = {});
    $com$oregondsp$signalProcessing$filter$fir$equiripple.EquirippleHighpass = EquirippleHighpass;
    var $com = _.com || (_.com = {});
    var $com$oregondsp = $com.oregondsp || ($com.oregondsp = {});
    var $com$oregondsp$signalProcessing = $com$oregondsp.signalProcessing || ($com$oregondsp.signalProcessing = {});
    var $com$oregondsp$signalProcessing$filter = $com$oregondsp$signalProcessing.filter || ($com$oregondsp$signalProcessing.filter = {});
    var $com$oregondsp$signalProcessing$filter$fir = $com$oregondsp$signalProcessing$filter.fir || ($com$oregondsp$signalProcessing$filter.fir = {});
    var $com$oregondsp$signalProcessing$filter$fir$equiripple = $com$oregondsp$signalProcessing$filter$fir.equiripple || ($com$oregondsp$signalProcessing$filter$fir.equiripple = {});
    $com$oregondsp$signalProcessing$filter$fir$equiripple.EquirippleLowpass = EquirippleLowpass;
    var $com = _.com || (_.com = {});
    var $com$oregondsp = $com.oregondsp || ($com.oregondsp = {});
    var $com$oregondsp$signalProcessing = $com$oregondsp.signalProcessing || ($com$oregondsp.signalProcessing = {});
    var $com$oregondsp$signalProcessing$filter = $com$oregondsp$signalProcessing.filter || ($com$oregondsp$signalProcessing.filter = {});
    var $com$oregondsp$signalProcessing$filter$fir = $com$oregondsp$signalProcessing$filter.fir || ($com$oregondsp$signalProcessing$filter.fir = {});
    var $com$oregondsp$signalProcessing$filter$fir$equiripple = $com$oregondsp$signalProcessing$filter$fir.equiripple || ($com$oregondsp$signalProcessing$filter$fir.equiripple = {});
    $com$oregondsp$signalProcessing$filter$fir$equiripple.FIRTypeI = FIRTypeI;
    var $com = _.com || (_.com = {});
    var $com$oregondsp = $com.oregondsp || ($com.oregondsp = {});
    var $com$oregondsp$signalProcessing = $com$oregondsp.signalProcessing || ($com$oregondsp.signalProcessing = {});
    var $com$oregondsp$signalProcessing$filter = $com$oregondsp$signalProcessing.filter || ($com$oregondsp$signalProcessing.filter = {});
    var $com$oregondsp$signalProcessing$filter$fir = $com$oregondsp$signalProcessing$filter.fir || ($com$oregondsp$signalProcessing$filter.fir = {});
    var $com$oregondsp$signalProcessing$filter$fir$equiripple = $com$oregondsp$signalProcessing$filter$fir.equiripple || ($com$oregondsp$signalProcessing$filter$fir.equiripple = {});
    $com$oregondsp$signalProcessing$filter$fir$equiripple.FIRTypeII = FIRTypeII;
    var $com = _.com || (_.com = {});
    var $com$oregondsp = $com.oregondsp || ($com.oregondsp = {});
    var $com$oregondsp$signalProcessing = $com$oregondsp.signalProcessing || ($com$oregondsp.signalProcessing = {});
    var $com$oregondsp$signalProcessing$filter = $com$oregondsp$signalProcessing.filter || ($com$oregondsp$signalProcessing.filter = {});
    var $com$oregondsp$signalProcessing$filter$fir = $com$oregondsp$signalProcessing$filter.fir || ($com$oregondsp$signalProcessing$filter.fir = {});
    var $com$oregondsp$signalProcessing$filter$fir$equiripple = $com$oregondsp$signalProcessing$filter$fir.equiripple || ($com$oregondsp$signalProcessing$filter$fir.equiripple = {});
    $com$oregondsp$signalProcessing$filter$fir$equiripple.FIRTypeIII = FIRTypeIII;
    var $com = _.com || (_.com = {});
    var $com$oregondsp = $com.oregondsp || ($com.oregondsp = {});
    var $com$oregondsp$signalProcessing = $com$oregondsp.signalProcessing || ($com$oregondsp.signalProcessing = {});
    var $com$oregondsp$signalProcessing$filter = $com$oregondsp$signalProcessing.filter || ($com$oregondsp$signalProcessing.filter = {});
    var $com$oregondsp$signalProcessing$filter$fir = $com$oregondsp$signalProcessing$filter.fir || ($com$oregondsp$signalProcessing$filter.fir = {});
    var $com$oregondsp$signalProcessing$filter$fir$equiripple = $com$oregondsp$signalProcessing$filter$fir.equiripple || ($com$oregondsp$signalProcessing$filter$fir.equiripple = {});
    $com$oregondsp$signalProcessing$filter$fir$equiripple.FIRTypeIV = FIRTypeIV;
    var $com = _.com || (_.com = {});
    var $com$oregondsp = $com.oregondsp || ($com.oregondsp = {});
    var $com$oregondsp$signalProcessing = $com$oregondsp.signalProcessing || ($com$oregondsp.signalProcessing = {});
    var $com$oregondsp$signalProcessing$filter = $com$oregondsp$signalProcessing.filter || ($com$oregondsp$signalProcessing.filter = {});
    var $com$oregondsp$signalProcessing$filter$fir = $com$oregondsp$signalProcessing$filter.fir || ($com$oregondsp$signalProcessing$filter.fir = {});
    var $com$oregondsp$signalProcessing$filter$fir$equiripple = $com$oregondsp$signalProcessing$filter$fir.equiripple || ($com$oregondsp$signalProcessing$filter$fir.equiripple = {});
    $com$oregondsp$signalProcessing$filter$fir$equiripple.StaggeredDifferentiator = StaggeredDifferentiator;
    var $com = _.com || (_.com = {});
    var $com$oregondsp = $com.oregondsp || ($com.oregondsp = {});
    var $com$oregondsp$signalProcessing = $com$oregondsp.signalProcessing || ($com$oregondsp.signalProcessing = {});
    var $com$oregondsp$signalProcessing$filter = $com$oregondsp$signalProcessing.filter || ($com$oregondsp$signalProcessing.filter = {});
    var $com$oregondsp$signalProcessing$filter$fir = $com$oregondsp$signalProcessing$filter.fir || ($com$oregondsp$signalProcessing$filter.fir = {});
    var $com$oregondsp$signalProcessing$filter$fir$equiripple = $com$oregondsp$signalProcessing$filter$fir.equiripple || ($com$oregondsp$signalProcessing$filter$fir.equiripple = {});
    $com$oregondsp$signalProcessing$filter$fir$equiripple.StaggeredHilbertTranform = StaggeredHilbertTranform;
    var $com = _.com || (_.com = {});
    var $com$oregondsp = $com.oregondsp || ($com.oregondsp = {});
    var $com$oregondsp$signalProcessing = $com$oregondsp.signalProcessing || ($com$oregondsp.signalProcessing = {});
    var $com$oregondsp$signalProcessing$filter = $com$oregondsp$signalProcessing.filter || ($com$oregondsp$signalProcessing.filter = {});
    var $com$oregondsp$signalProcessing$filter$iir = $com$oregondsp$signalProcessing$filter.iir || ($com$oregondsp$signalProcessing$filter.iir = {});
    $com$oregondsp$signalProcessing$filter$iir.Allpass = Allpass;
    $com$oregondsp$signalProcessing$filter$iir.Allpass.Allpass_ofPolynomial = Allpass_ofPolynomial;
    $com$oregondsp$signalProcessing$filter$iir.Allpass.Allpass_ofArray = Allpass_ofArray;
    var $com = _.com || (_.com = {});
    var $com$oregondsp = $com.oregondsp || ($com.oregondsp = {});
    var $com$oregondsp$signalProcessing = $com$oregondsp.signalProcessing || ($com$oregondsp.signalProcessing = {});
    var $com$oregondsp$signalProcessing$filter = $com$oregondsp$signalProcessing.filter || ($com$oregondsp$signalProcessing.filter = {});
    var $com$oregondsp$signalProcessing$filter$iir = $com$oregondsp$signalProcessing$filter.iir || ($com$oregondsp$signalProcessing$filter.iir = {});
    $com$oregondsp$signalProcessing$filter$iir.AnalogPrototype = AnalogPrototype;
    var $com = _.com || (_.com = {});
    var $com$oregondsp = $com.oregondsp || ($com.oregondsp = {});
    var $com$oregondsp$signalProcessing = $com$oregondsp.signalProcessing || ($com$oregondsp.signalProcessing = {});
    var $com$oregondsp$signalProcessing$filter = $com$oregondsp$signalProcessing.filter || ($com$oregondsp$signalProcessing.filter = {});
    var $com$oregondsp$signalProcessing$filter$iir = $com$oregondsp$signalProcessing$filter.iir || ($com$oregondsp$signalProcessing$filter.iir = {});
    $com$oregondsp$signalProcessing$filter$iir.Butterworth = Butterworth;
    var $com = _.com || (_.com = {});
    var $com$oregondsp = $com.oregondsp || ($com.oregondsp = {});
    var $com$oregondsp$signalProcessing = $com$oregondsp.signalProcessing || ($com$oregondsp.signalProcessing = {});
    var $com$oregondsp$signalProcessing$filter = $com$oregondsp$signalProcessing.filter || ($com$oregondsp$signalProcessing.filter = {});
    var $com$oregondsp$signalProcessing$filter$iir = $com$oregondsp$signalProcessing$filter.iir || ($com$oregondsp$signalProcessing$filter.iir = {});
    $com$oregondsp$signalProcessing$filter$iir.ChebyshevI = ChebyshevI;
    var $com = _.com || (_.com = {});
    var $com$oregondsp = $com.oregondsp || ($com.oregondsp = {});
    var $com$oregondsp$signalProcessing = $com$oregondsp.signalProcessing || ($com$oregondsp.signalProcessing = {});
    var $com$oregondsp$signalProcessing$filter = $com$oregondsp$signalProcessing.filter || ($com$oregondsp$signalProcessing.filter = {});
    var $com$oregondsp$signalProcessing$filter$iir = $com$oregondsp$signalProcessing$filter.iir || ($com$oregondsp$signalProcessing$filter.iir = {});
    $com$oregondsp$signalProcessing$filter$iir.ChebyshevII = ChebyshevII;
    var $com = _.com || (_.com = {});
    var $com$oregondsp = $com.oregondsp || ($com.oregondsp = {});
    var $com$oregondsp$signalProcessing = $com$oregondsp.signalProcessing || ($com$oregondsp.signalProcessing = {});
    var $com$oregondsp$signalProcessing$filter = $com$oregondsp$signalProcessing.filter || ($com$oregondsp$signalProcessing.filter = {});
    var $com$oregondsp$signalProcessing$filter$iir = $com$oregondsp$signalProcessing$filter.iir || ($com$oregondsp$signalProcessing$filter.iir = {});
    $com$oregondsp$signalProcessing$filter$iir.Complex = Complex;
    $com$oregondsp$signalProcessing$filter$iir.Complex.Complex_fromReal = Complex_fromReal;
    Object.defineProperty($com$oregondsp$signalProcessing$filter$iir.Complex, 'Companion', {
      configurable: true,
      get: Companion_getInstance_8
    });
    var $com = _.com || (_.com = {});
    var $com$oregondsp = $com.oregondsp || ($com.oregondsp = {});
    var $com$oregondsp$signalProcessing = $com$oregondsp.signalProcessing || ($com$oregondsp.signalProcessing = {});
    var $com$oregondsp$signalProcessing$filter = $com$oregondsp$signalProcessing.filter || ($com$oregondsp$signalProcessing.filter = {});
    var $com$oregondsp$signalProcessing$filter$iir = $com$oregondsp$signalProcessing$filter.iir || ($com$oregondsp$signalProcessing$filter.iir = {});
    $com$oregondsp$signalProcessing$filter$iir.IIRFilter = IIRFilter;
    var $com = _.com || (_.com = {});
    var $com$oregondsp = $com.oregondsp || ($com.oregondsp = {});
    var $com$oregondsp$signalProcessing = $com$oregondsp.signalProcessing || ($com$oregondsp.signalProcessing = {});
    var $com$oregondsp$signalProcessing$filter = $com$oregondsp$signalProcessing.filter || ($com$oregondsp$signalProcessing.filter = {});
    var $com$oregondsp$signalProcessing$filter$iir = $com$oregondsp$signalProcessing$filter.iir || ($com$oregondsp$signalProcessing$filter.iir = {});
    $com$oregondsp$signalProcessing$filter$iir.PassbandType = PassbandType;
    $com$oregondsp$signalProcessing$filter$iir.PassbandType.values = values;
    $com$oregondsp$signalProcessing$filter$iir.PassbandType.valueOf = valueOf;
    Object.defineProperty($com$oregondsp$signalProcessing$filter$iir.PassbandType, 'LOWPASS', {
      configurable: true,
      get: PassbandType_LOWPASS_getInstance
    });
    Object.defineProperty($com$oregondsp$signalProcessing$filter$iir.PassbandType, 'BANDPASS', {
      configurable: true,
      get: PassbandType_BANDPASS_getInstance
    });
    Object.defineProperty($com$oregondsp$signalProcessing$filter$iir.PassbandType, 'HIGHPASS', {
      configurable: true,
      get: PassbandType_HIGHPASS_getInstance
    });
    var $com = _.com || (_.com = {});
    var $com$oregondsp = $com.oregondsp || ($com.oregondsp = {});
    var $com$oregondsp$signalProcessing = $com$oregondsp.signalProcessing || ($com$oregondsp.signalProcessing = {});
    var $com$oregondsp$signalProcessing$filter = $com$oregondsp$signalProcessing.filter || ($com$oregondsp$signalProcessing.filter = {});
    var $com$oregondsp$signalProcessing$filter$iir = $com$oregondsp$signalProcessing$filter.iir || ($com$oregondsp$signalProcessing$filter.iir = {});
    $com$oregondsp$signalProcessing$filter$iir.ThiranAllpass = ThiranAllpass;
  }
  $jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=oregondsp.js.map
