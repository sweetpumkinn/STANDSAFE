	// 퀵메뉴
	var stmnLEFT = 10; // 오른쪽 여백 
	var stmnGAP1 = 0; // 위쪽 여백 
	var stmnGAP2 = 150; // 스크롤시 브라우저 위쪽과 떨어지는 거리 
	var stmnBASE = 150; // 스크롤 시작위치 
	var stmnActivateSpeed = 20; //스크롤을 인식하는 딜레이 (숫자가 클수록 느리게 인식)
	var stmnScrollSpeed = 10; //스크롤 속도 (클수록 느림)
	var stmnTimer;

	function RefreshStaticMenu() {
		var stmnStartPoint, stmnEndPoint;
		stmnStartPoint = parseInt(
				document.getElementById('STATICMENU').style.top, 10);
		stmnEndPoint = Math.max(document.documentElement.scrollTop,
				document.body.scrollTop)
				+ stmnGAP2;
		if (stmnEndPoint < stmnGAP1)
			stmnEndPoint = stmnGAP1;
		if (stmnStartPoint != stmnEndPoint) {
			stmnScrollAmount = Math.ceil(Math
					.abs(stmnEndPoint - stmnStartPoint) / 15);
			document.getElementById('STATICMENU').style.top = parseInt(document
					.getElementById('STATICMENU').style.top, 10)
					+ ((stmnEndPoint < stmnStartPoint) ? -stmnScrollAmount
							: stmnScrollAmount) + 'px';
			stmnRefreshTimer = stmnScrollSpeed;
		}
		stmnTimer = setTimeout("RefreshStaticMenu();", stmnActivateSpeed);
	}
	function InitializeStaticMenu() {
		document.getElementById('STATICMENU').style.right = stmnLEFT + 'px';
		document.getElementById('STATICMENU').style.top = document.body.scrollTop
				+ stmnBASE + 'px';
		RefreshStaticMenu();
	}