class FirstEui extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}
    public btn:eui.Button;

	protected childrenCreated():void
	{
		super.childrenCreated();
		this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onButtonClick, this);
	}

	private onButtonClick():void
	{
		
	}
	
}