import {
  Component,
  OnInit,
  ViewChild,
  Renderer2,
  HostListener,
  ElementRef,
  forwardRef,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
  Input,
  ChangeDetectorRef
} from '@angular/core';
import {
  parsePhoneNumberFromString,
  AsYouType,
  getCountryCallingCode
} from 'libphonenumber-js';
import { countries, countriesIso } from './phoneCodeCountries';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import examples from './examples';

@Component({
  selector: 'ngx-phone-number-input',
  templateUrl: './phone-number-input.component.html',
  styleUrls: ['./phone-number-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhoneNumberInputComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhoneNumberInputComponent
  implements OnInit, OnChanges, ControlValueAccessor {
  public countries: Array<any> = countries;
  public examples = <any>examples;
  @Input() disabled = false;
  @Input() defaultCountry = this.countries[0].iso2;
  @Input() placeholderText = 'Exp';
  public selectedCountry;
  public phoneNumber = '';
  public selectedCountryIndex = 0;
  public tempSelectedCountryIndex = 0;
  public itemHeight = 32;
  public isCountrySelectionFocused = false;
  public isMenuOpen = false;
  public propagateChange = (_: any) => {};

  @ViewChild('menu', { static: true })
  menu;
  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    if (
      !this.elementRef.nativeElement.contains(targetElement) &&
      this.menu.nativeElement.classList.contains('show')
    ) {
      this.renderer.removeClass(this.menu.nativeElement, 'show');
    }
  }

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private changeDetectionRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    if (this.defaultCountry) {
      const selectedCountry = this.countries.find(
        c => c.iso2 === this.defaultCountry
      );
      this.pickCountry(selectedCountry ? selectedCountry : this.countries[0]);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {}

  pickCountry(country) {
    this.selectedCountry = country;
    this.selectedCountryIndex = this.countries.findIndex(
      c => c.iso2 === this.selectedCountry.iso2
    );
    this.tempSelectedCountryIndex = this.selectedCountryIndex;
    this.phoneNumberChanged(this.phoneNumber);
    this.closeMenu();
    this.propagateChange(
      this.getParsePhoneNumberFromString({
        phoneNumber: this.phoneNumber,
        countryCode: this.selectedCountry.iso2
      })
    );
    this.changeDetectionRef.markForCheck();
  }

  toggleMenu() {
    if (this.menu.nativeElement.classList.contains('show')) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  onCountrySelectionButtonClicked() {
    if (
      !this.menu.nativeElement.classList.contains('show') &&
      this.isCountrySelectionFocused
    ) {
      this.openMenu();
    }
  }

  onFocused() {
    this.openMenu();
    this.isCountrySelectionFocused = true;
  }

  onBlured(event) {
    if (
      event.type === 'blur' &&
      this.menu.nativeElement.contains(event.target)
    ) {
      this.closeMenu();
      this.isCountrySelectionFocused = false;
    }

    if (
      event.type === 'keydown' &&
      (event.keyCode === 9 || event.keyCode === 27)
    ) {
      this.closeMenu();
      this.isCountrySelectionFocused = false;
    }
  }

  keyboardNav(e) {
    const code = e.keyCode;
    if (this.menu.nativeElement.classList.contains('show')) {
      if (code === 40 || code === 38) {
        this.tempSelectedCountryIndex =
          code === 40
            ? this.tempSelectedCountryIndex + 1
            : this.tempSelectedCountryIndex - 1;

        if (
          this.tempSelectedCountryIndex === -1 ||
          this.tempSelectedCountryIndex >= this.countries.length
        ) {
          this.tempSelectedCountryIndex =
            this.tempSelectedCountryIndex === -1
              ? this.countries.length - 1
              : 0;
        }

        e.preventDefault();

        this.renderer.setProperty(
          this.menu.nativeElement,
          'scrollTop',
          this.tempSelectedCountryIndex * this.itemHeight - this.itemHeight * 3
        );
      } else if (code === 13) {
        this.pickCountry(this.countries[this.tempSelectedCountryIndex]);
        e.preventDefault();
      } else if (code === 27 || code === 9) {
        this.onBlured(e);
      } else {
        //search countries
      }
    } else {
      if (this.isCountrySelectionFocused && code === 13) {
        this.openMenu();
      }
    }
  }

  closeMenu() {
    this.renderer.removeClass(this.menu.nativeElement, 'show');
  }

  openMenu() {
    this.renderer.addClass(this.menu.nativeElement, 'show');
    this.renderer.setProperty(
      this.menu.nativeElement,
      'scrollTop',
      this.tempSelectedCountryIndex * this.itemHeight - this.itemHeight * 3
    );
  }

  isCountrySelected(country): boolean {
    if (!this.selectedCountry) {
      return false;
    }
    return country.iso2 === this.selectedCountry.iso2;
  }

  getCountryCallingCode(country) {
    return getCountryCallingCode(country.iso2.toUpperCase());
  }

  phoneNumberChanged(number: string) {
    const asYouType = new AsYouType(this.selectedCountry.iso2.toUpperCase());
    this.phoneNumber = asYouType.input(number);

    this.propagateChange(
      this.getParsePhoneNumberFromString({
        phoneNumber: this.phoneNumber,
        countryCode: this.selectedCountry.iso2
      })
    );
  }

  getAsYouTyped(number) {
    const asYouType = new AsYouType(this.selectedCountry.iso2.toUpperCase());
    return asYouType.input(number);
  }

  getParsePhoneNumberFromString({ phoneNumber, countryCode }) {
    const parsing =
      phoneNumber && countryCode
        ? parsePhoneNumberFromString(phoneNumber, countryCode)
        : null;
    return {
      phoneNumber: phoneNumber ? phoneNumber : null,
      dialCode: this.selectedCountry.dialCode,
      countryCode: countryCode,
      isValid: false,
      ...(parsing
        ? {
            formattedNumber: parsing.number,
            nationalNumber: parsing.nationalNumber,
            isValid: parsing.isValid(),
            type: parsing.getType(),
            formatInternational: parsing.formatInternational(),
            formatNational: parsing.formatNational(),
            uri: parsing.getURI(),
            e164: parsing.format('E.164')
          }
        : null)
    };
  }

  writeValue(obj: any): void {
    this.phoneNumber = obj ? obj.phoneNumber : null;
    let country;
    if (obj && obj.dialCode) {
      country = this.countries.find(c => c.dialCode === obj.dialCode);
    } else if (this.defaultCountry) {
      country = this.countries.find(c => c.iso2 === this.defaultCountry);
    } else {
      country = this.countries[0];
    }
    if (country) {
      this.pickCountry(country);
    }
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    // this.propagateChange = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
