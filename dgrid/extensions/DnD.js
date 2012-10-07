//>>built
define("dgrid/extensions/DnD","dojo/_base/declare,dojo/_base/lang,dojo/_base/Deferred,dojo/dnd/Source,dojo/dnd/Manager,put-selector/put,xstyle/css!dojo/resources/dnd.css".split(","),function(d,g,k,l,n,o){function m(a){if(!a.dndSource)a.dndSource=new (a.dndConstructor||h)(a.bodyNode,g.mixin(a.dndParams,{grid:a,dropParent:a.contentNode}))}var h=d(l,{grid:null,getObject:function(a){var b=this.grid;return b.store.get(b.row(a).id)},_legalMouseDown:function(a){return this.inherited("_legalMouseDown",arguments)&&
a.target!=this.grid.bodyNode},onDrop:function(a,b,i){var f=this,c=this._targetAnchor=this.targetAnchor,e=this.grid,j=e.store;if(!this.before&&c)c=c.nextSibling;c=c&&e.row(c);k.when(c&&j.get(c.id),function(c){if(f!=a)f.onDropExternal(a,b,i,c);else f.onDropInternal(b,i,c)})},onDropInternal:function(a,b,i){var f=this.grid.store,c=this,e=this.grid,j=c._targetAnchor,d;j&&(d=this.before?j.previousSibling:j.nextSibling);(b||!(d===a[0]||!i&&e.down(e.row(a[0])).element==a[0]))&&a.forEach(function(a){k.when(c.getObject(a),
function(a){f[b&&f.copy?"copy":"put"](a,{before:i})})})},onDropExternal:function(a,b,d,f){var c=this.grid.store,e=a.grid;b.forEach(function(b,h){k.when(a.getObject(b),function(g){d||(e?k.when(e.store.getIdentity(g),function(c){!h&&a.selectNone();a.delItem(b.id);e.store.remove(c)}):a.deleteSelectedNodes());c[c.copy?"copy":"put"](g,{before:f})})})},onDndStart:function(a,b,d){this.inherited(arguments);if(a==this)n.manager().avatar.node.style.width=this.grid.domNode.offsetWidth/2+"px"},checkAcceptance:function(a,
b){return a.getObject&&l.prototype.checkAcceptance.apply(this,arguments)}}),d=d([],{dndSourceType:"dgrid-row",dndParams:null,dndConstructor:h,postMixInProperties:function(){this.inherited(arguments);this.dndParams=g.mixin({accept:[this.dndSourceType]},this.dndParams)},postCreate:function(){this.inherited(arguments);m(this)},insertRow:function(a){var b=this.inherited(arguments);o(b,".dojoDndItem");m(this);this.dndSource.setItem(b.id,{data:a,type:[this.dndSourceType]});return b}});d.GridSource=h;return d});