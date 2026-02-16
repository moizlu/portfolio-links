export const splashHiddenEvent = new Event('splashHidden');

export class SplashStateManager {
    public get isAppear() { return this._isAppear; }
    public set isAppear(value: boolean) {
        this._isAppear = value;

        if (!this._isAppear) {
            document.dispatchEvent(splashHiddenEvent);
        }
    }
    private _isAppear = $state(true);
}

export const splashState = new SplashStateManager();
