var cm = {
	addHtml: function(divHtmlUrl) {
		var temp = new Date();
		$("#contextDivId").load(divHtmlUrl + "?temp=" + temp.getTime());
	},
	addChildHtml : function(divHtmlUrl){
		var temp = new Date();
		$("#personaCenterIndexId").load(divHtmlUrl+"?temp="+temp.getTime());
	},
	initDiv: function(height, id) {
		var windowHeight = window.screen.height;
		var divheight = 0;
		if(height) {
			divheight = windowHeight - height;
		} else {
			divheight = windowHeight;			
		}
		$("#" + id).css("height", divheight + "px");
	},
	getToken: function(config) {
		cm.markLayer(1);
		if(!config) {
			return;
		}
		var xhr = new XMLHttpRequest();
		if(config.timeout) {
			xhr.timeout = config.timeout;
			if(config.ontimeout) {
				xhr.ontimeout = config.ontimeout;
			}
		}
		xhr.onreadystatechange = function() {
			switch(xhr.readyState) {
				case 4:
					if(xhr.status == 200) {
						try {
							var data = JSON.parse(xhr.responseText);
							localStorage.setItem("Authorization", data.obj.access_token);
							localStorage.setItem("recAuthorization", data.obj.rel_token);
							return config.onsuccess(data);
						} catch(e) {
							return config.onerror(e.message);
						}
					} else {
						if(xhr.status == 401) {
							cm.markLayer(0);
						} else {
							cm.markLayer(0);
							return config.onerror("获取数据失败：" + xhr.status);
						}
					}
					break;
				default:
					break;
			}
		}
		var url = cmConfig.apiUrl + config.url;
		xhr.open("POST", url, true);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		// 发送HTTP请求
		if(config.data) {
			xhr.send(config.data);
		} else {
			xhr.send();
		}
	},
	getApi: function(config) {
		cm.markLayer(1);
		if(!config) {
			return;
		}
		var xhr = new XMLHttpRequest();
		if(config.timeout) {
			xhr.timeout = config.timeout;
			if(config.ontimeout) {
				xhr.ontimeout = config.ontimeout;
			}
		}
		xhr.onreadystatechange = function() {
			switch(xhr.readyState) {
				case 4:
					if(xhr.status == 200) {
						try {
							var data = JSON.parse(xhr.responseText);
							cm.markLayer(0);
							return config.onsuccess(data);
						} catch(e) {
							cm.markLayer(0);
							return config.onerror(e.message);
						}
					} else {
						if(xhr.status == 401) {
							cm.markLayer(0);
						} else {
							cm.markLayer(0);
							return config.onerror("获取数据失败：" + xhr.status);
						}
					}
					break;
				default:
					break;
			}
		}
		var url = cmConfig.apiUrl + config.url;
		xhr.open("POST", url, true);

		var Authorization = localStorage.getItem("Authorization");
		if(Authorization != null) {
			xhr.setRequestHeader("Authorization", Authorization);
		} else {
			if(config.url != "getVfCode.do"){
				window.history.forward(1); 
				window.location.href="login.html";
				return false;
			}
		}

		//设置请求头
		if(config.requestHeader) {
			for(var i in config.requestHeader) {
				xhr.setRequestHeader(i, config.requestHeader[i]);
			}
		}
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		//      xhr.setRequestHeader('Access-Control-Allow-Origin','*');
		//      xhr.withCredentials = true;
		// 发送HTTP请求
		if(config.data) {
			xhr.send(config.data);
		} else {
			xhr.send();
		}
	},
	getContext: function() {
		var curWwwPath = window.document.location.href;
		var pathName = window.document.location.pathname;
		var pos = curWwwPath.indexOf(pathName);
		var localhostPaht = curWwwPath.substring(0, pos);
		var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
		return(localhostPaht + projectName);
	},
	uploadFile: function(config) {
		cm.markLayer(1);
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			switch(xhr.readyState) {
				case 4:
					if(xhr.status == 200) {
						try {
							var data = JSON.parse(xhr.responseText);
							cm.markLayer(0);
							return config.onsuccess(data);
						} catch(e) {
							cm.markLayer(0);
							return config.onerror(e.message);
						}
					} else {
						if(xhr.status == 401) {
							cm.markLayer(0);
						} else {
							cm.markLayer(0);
							return config.onerror("获取数据失败：" + xhr.status);
						}
					}
					break;
				default:
					break;
			}
		};

		var data = cm.getFormData();

		if(config.data) {
			var dt = config.data;
			for(var i in dt) {
				if(i && i != undefined) {
					data.append(i, dt[i] + '');
				}
			}
		}
		var url = cmConfig.apiUrl + config.url; 
		xhr.open("POST", url, true);
		xhr.setRequestHeader('Authorization', localStorage.getItem("Authorization"));
//		xhr.setRequestHeader('Content-Type', 'multipart/form-data');

		if(config.files) {
			for(i = 0; i < config.files.length; i++) {
				data.append("files", config.files[i]);
			}
		}
		xhr.send(data);
	},
	getFormData: function() {
		var isNeedShim = ~navigator.userAgent.indexOf('Android') &&
			~navigator.vendor.indexOf('Google') &&
			!~navigator.userAgent.indexOf('Chrome') &&
			navigator.userAgent.match(/AppleWebKit\/(\d+)/).pop() <= 534;

		return isNeedShim ? new owner.FormDataShim() : new FormData()
	},
	markLayer: function(type) {

	}
	

};