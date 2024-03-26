// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../core/arrayUtils ../../core/has ./checkWebGLError ./contextUtils ./enums ./ShaderTranspiler".split(" "),function(l,v,y,m,q,g,r){function t(a,b,c){a=a.gl;const d=a.createShader(b);a.shaderSource(d,c);a.compileShader(d);m.webglValidateShadersEnabled()&&!a.getShaderParameter(d,a.COMPILE_STATUS)&&(console.error("Compile error in ".concat(b===g.ShaderType.VERTEX_SHADER?"vertex":"fragment"," shader")),console.error(a.getShaderInfoLog(d)),console.error(w(c)));return d}function w(a){let b=
2;return a.replaceAll("\n",()=>{var c=b++;c=1E3<=c?c.toString():("  "+c).slice(-3);return"\n"+c+":"})}function h(a,b,c){const d=a.get(b);return d?v.update(d,c):(a.set(b,Array.from(c)),!0)}class x{constructor(a,b,c,d,f=new Map){this._context=a;this._locations=d;this._uniformBlockBindings=f;this._refCount=1;this._compiled=!1;this._linesOfCode=0;this._nameToUniformLocation=new Map;this._nameToUniform1=new Map;this._nameToUniform1v=new Map;this._nameToUniform2=new Map;this._nameToUniform3=new Map;this._nameToUniform4=
new Map;this._nameToUniformMatrix3=new Map;this._nameToUniformMatrix4=new Map;a||console.error("RenderingContext isn't initialized!");0===b.length&&console.error("Shaders source should not be empty!");this._context.type===q.ContextType.WEBGL2&&(b=r.transpileShader(b,g.ShaderType.VERTEX_SHADER),c=r.transpileShader(c,g.ShaderType.FRAGMENT_SHADER));this._vShader=t(this._context,g.ShaderType.VERTEX_SHADER,b);this._fShader=t(this._context,g.ShaderType.FRAGMENT_SHADER,c);u.enabled&&(this._linesOfCode=b.match(/\n/g).length+
c.match(/\n/g).length+2,this._context.instanceCounter.increment(g.ResourceType.LinesOfCode,this._vShader,this._linesOfCode));this._vShader&&this._fShader||console.error("Error loading shaders!");this._context.instanceCounter.increment(g.ResourceType.Shader,this);m.webglValidateShadersEnabled()&&(this.vertexShader=b,this.fragmentShader=c);const e=this._context.gl,k=e.createProgram();e.attachShader(k,this._vShader);e.attachShader(k,this._fShader);this._locations.forEach((n,p)=>e.bindAttribLocation(k,
n,p));e.linkProgram(k);m.webglValidateShadersEnabled()&&!e.getProgramParameter(k,e.LINK_STATUS)&&console.error("Could not link shader\n"+`validated: ${e.getProgramParameter(k,e.VALIDATE_STATUS)}`+`, gl error ${e.getError()}`+`, vertex: ${e.getShaderParameter(this._vShader,e.COMPILE_STATUS)}`+`, fragment: ${e.getShaderParameter(this._fShader,e.COMPILE_STATUS)}`+`, info log: ${e.getProgramInfoLog(k)}`+`, vertex source: ${this.vertexShader}`+`, fragment source: ${this.fragmentShader}`);if(this._context.type===
q.ContextType.WEBGL2)for(const [n,p]of this._uniformBlockBindings)a=e.getUniformBlockIndex(k,n),4294967295>a&&e.uniformBlockBinding(k,a,p);this._glName=k;this._context.instanceCounter.increment(g.ResourceType.Program,this)}get glName(){return this._glName}get hasGLName(){return null!=this._glName}get compiled(){if(this._compiled)return!0;const a=this._context.gl.getExtension("KHR_parallel_shader_compile");return null==a||null==this.glName?this._compiled=!0:this._compiled=!!this._context.gl.getProgramParameter(this.glName,
a.COMPLETION_STATUS_KHR)}dispose(){if(!(0<--this._refCount)){var a=this._context.gl,b=this._context.instanceCounter;this._nameToUniformLocation.forEach(c=>c&&b.decrement(g.ResourceType.Uniform,c));this._nameToUniformLocation.clear();this._vShader&&(0<this._linesOfCode&&(b.decrement(g.ResourceType.LinesOfCode,this._vShader,this._linesOfCode),this._linesOfCode=0),a.deleteShader(this._vShader),this._vShader=null,b.decrement(g.ResourceType.Shader,this));this._fShader&&(a.deleteShader(this._fShader),this._fShader=
null);this._glName&&(a.deleteProgram(this._glName),this._glName=null,b.decrement(g.ResourceType.Program,this))}}ref(){++this._refCount}_getUniformLocation(a){var b=this._nameToUniformLocation.get(a);return void 0!==b?b:this.glName?(b=this._context.gl.getUniformLocation(this.glName,a),this._nameToUniformLocation.set(a,b),b&&this._context.instanceCounter.increment(g.ResourceType.Uniform,b),b):null}hasUniform(a){return null!=this._getUniformLocation(a)}setUniform1i(a,b){const c=this._nameToUniform1.get(a);
if(void 0===c||b!==c)this._context.gl.uniform1i(this._getUniformLocation(a),b),this._nameToUniform1.set(a,b)}setUniform1iv(a,b){h(this._nameToUniform1v,a,b)&&this._context.gl.uniform1iv(this._getUniformLocation(a),b)}setUniform2iv(a,b){h(this._nameToUniform2,a,b)&&this._context.gl.uniform2iv(this._getUniformLocation(a),b)}setUniform3iv(a,b){h(this._nameToUniform3,a,b)&&this._context.gl.uniform3iv(this._getUniformLocation(a),b)}setUniform4iv(a,b){h(this._nameToUniform4,a,b)&&this._context.gl.uniform4iv(this._getUniformLocation(a),
b)}setUniform1f(a,b){const c=this._nameToUniform1.get(a);if(void 0===c||b!==c)this._context.gl.uniform1f(this._getUniformLocation(a),b),this._nameToUniform1.set(a,b)}setUniform1fv(a,b){h(this._nameToUniform1v,a,b)&&this._context.gl.uniform1fv(this._getUniformLocation(a),b)}setUniform2f(a,b,c){const d=this._nameToUniform2.get(a);if(void 0===d)this._context.gl.uniform2f(this._getUniformLocation(a),b,c),this._nameToUniform2.set(a,[b,c]);else if(b!==d[0]||c!==d[1])this._context.gl.uniform2f(this._getUniformLocation(a),
b,c),d[0]=b,d[1]=c}setUniform2fv(a,b){h(this._nameToUniform2,a,b)&&this._context.gl.uniform2fv(this._getUniformLocation(a),b)}setUniform3f(a,b,c,d){const f=this._nameToUniform3.get(a);if(void 0===f)this._context.gl.uniform3f(this._getUniformLocation(a),b,c,d),this._nameToUniform3.set(a,[b,c,d]);else if(b!==f[0]||c!==f[1]||d!==f[2])this._context.gl.uniform3f(this._getUniformLocation(a),b,c,d),f[0]=b,f[1]=c,f[2]=d}setUniform3fv(a,b){h(this._nameToUniform3,a,b)&&this._context.gl.uniform3fv(this._getUniformLocation(a),
b)}setUniform4f(a,b,c,d,f){const e=this._nameToUniform4.get(a);if(void 0===e)this._context.gl.uniform4f(this._getUniformLocation(a),b,c,d,f),this._nameToUniform4.set(a,[b,c,d,f]);else if(void 0===e||b!==e[0]||c!==e[1]||d!==e[2]||f!==e[3])this._context.gl.uniform4f(this._getUniformLocation(a),b,c,d,f),e[0]=b,e[1]=c,e[2]=d,e[3]=f}setUniform4fv(a,b){h(this._nameToUniform4,a,b)&&this._context.gl.uniform4fv(this._getUniformLocation(a),b)}setUniformMatrix3fv(a,b,c=!1){h(this._nameToUniformMatrix3,a,b)&&
this._context.gl.uniformMatrix3fv(this._getUniformLocation(a),c,b)}setUniformMatrix4fv(a,b,c=!1){h(this._nameToUniformMatrix4,a,b)&&this._context.gl.uniformMatrix4fv(this._getUniformLocation(a),c,b)}stop(){}}const u={enabled:!1};l.Program=x;l.test=u;Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});