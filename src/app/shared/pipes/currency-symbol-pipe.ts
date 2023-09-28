import { CurrencyPipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'currencySymbol' })
export class CurrencySymbolPipe implements PipeTransform {
    private _innerPipe: CurrencyPipe;
    private _rounded: string = "1.0-0";
    private _standard: string = "1.2-2";
    private _roundedFormat: string = "Rounded";
    private _standardFormat: string = "Standard";
    private _defaultLocale: string = "en-US";
    private _defaultCurrencyCode: string = "USD";

    constructor() {
        this._innerPipe = new CurrencyPipe(this._defaultLocale);
    }

    public transform(value: any, digits?: string, locale?: string, currencyCode?: string): any {
        switch (digits) {
            case this._roundedFormat:
                digits = this._rounded;
                break;
            case this._standardFormat:
                digits = this._standard;
                break;
            default:
                digits = this._rounded;
                break;
        }

        if (locale === undefined || locale === null || locale === "") {
            locale = this._defaultLocale;
        }

        if (currencyCode === undefined || currencyCode === null || currencyCode === "") {
            currencyCode = this._defaultCurrencyCode;
        }

        return this._innerPipe.transform(value, currencyCode, "symbol", digits, locale);
    }
}