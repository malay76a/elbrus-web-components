/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface MyComponentAttributes extends StencilHTMLAttributes {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }

  interface UcAdeoLink {}
  interface UcAdeoLinkAttributes extends StencilHTMLAttributes {}

  interface UcApp {}
  interface UcAppAttributes extends StencilHTMLAttributes {}

  interface UcBreadcrumbItem {
    'icon': string;
  }
  interface UcBreadcrumbItemAttributes extends StencilHTMLAttributes {
    'icon'?: string;
  }

  interface UcBreadcrumbList {}
  interface UcBreadcrumbListAttributes extends StencilHTMLAttributes {}

  interface UcContainer {}
  interface UcContainerAttributes extends StencilHTMLAttributes {}

  interface UcCurrentFilterGroup {
    'facetId': string;
    'title': string;
  }
  interface UcCurrentFilterGroupAttributes extends StencilHTMLAttributes {
    'facetId'?: string;
    'title'?: string;
  }

  interface UcCurrentFilterItem {
    'facetName': string;
  }
  interface UcCurrentFilterItemAttributes extends StencilHTMLAttributes {
    'facetName'?: string;
  }

  interface UcCurrentFilter {
    'count': string;
    'resetButton': boolean;
  }
  interface UcCurrentFilterAttributes extends StencilHTMLAttributes {
    'count'?: string;
    'resetButton'?: boolean;
  }

  interface UcFacetAndList {}
  interface UcFacetAndListAttributes extends StencilHTMLAttributes {
    'onFilterShow'?: (event: CustomEvent) => void;
  }

  interface UcFacetCheckboxGroup {
    'facetId': string;
  }
  interface UcFacetCheckboxGroupAttributes extends StencilHTMLAttributes {
    'facetId'?: string;
  }

  interface UcFacetCheckboxItem {
    'checked': boolean;
    'count': string;
    'disabled': boolean;
    'label': string;
  }
  interface UcFacetCheckboxItemAttributes extends StencilHTMLAttributes {
    'checked'?: boolean;
    'count'?: string;
    'disabled'?: boolean;
    'label'?: string;
  }

  interface UcFacetSlider {
    'facetId': string;
    'leftValue': string;
    'max': string;
    'min': string;
    'rightValue': string;
    'step': string;
  }
  interface UcFacetSliderAttributes extends StencilHTMLAttributes {
    'facetId'?: string;
    'leftValue'?: string;
    'max'?: string;
    'min'?: string;
    'rightValue'?: string;
    'step'?: string;
  }

  interface UcFacetToggle {
    'closed': boolean;
    'titleFacet': string;
  }
  interface UcFacetToggleAttributes extends StencilHTMLAttributes {
    'closed'?: boolean;
    'titleFacet'?: string;
  }

  interface UcFacetsList {}
  interface UcFacetsListAttributes extends StencilHTMLAttributes {}

  interface UcFooterAppMobile {}
  interface UcFooterAppMobileAttributes extends StencilHTMLAttributes {}

  interface UcFooterApps {}
  interface UcFooterAppsAttributes extends StencilHTMLAttributes {}

  interface UcFooterLinkBlock {}
  interface UcFooterLinkBlockAttributes extends StencilHTMLAttributes {}

  interface UcFooterMenuItem {}
  interface UcFooterMenuItemAttributes extends StencilHTMLAttributes {}

  interface UcFooterMenuToggle {}
  interface UcFooterMenuToggleAttributes extends StencilHTMLAttributes {}

  interface UcFooterMenu {}
  interface UcFooterMenuAttributes extends StencilHTMLAttributes {}

  interface UcFooterSocialLinks {}
  interface UcFooterSocialLinksAttributes extends StencilHTMLAttributes {}

  interface UcFooterSubscribe {
    'action': string;
    'method': 'GET' | 'POST';
  }
  interface UcFooterSubscribeAttributes extends StencilHTMLAttributes {
    'action'?: string;
    'method'?: 'GET' | 'POST';
  }

  interface UcFooter {}
  interface UcFooterAttributes extends StencilHTMLAttributes {}

  interface UcHeaderCatalog {}
  interface UcHeaderCatalogAttributes extends StencilHTMLAttributes {}

  interface UcHeaderLogoImg {}
  interface UcHeaderLogoImgAttributes extends StencilHTMLAttributes {}

  interface UcHeaderLogo {}
  interface UcHeaderLogoAttributes extends StencilHTMLAttributes {}

  interface UcHeaderPanel {}
  interface UcHeaderPanelAttributes extends StencilHTMLAttributes {}

  interface UcHeaderSearch {
    'action': string;
  }
  interface UcHeaderSearchAttributes extends StencilHTMLAttributes {
    'action'?: string;
  }

  interface UcHeader {}
  interface UcHeaderAttributes extends StencilHTMLAttributes {}

  interface UcNckd {}
  interface UcNckdAttributes extends StencilHTMLAttributes {}

  interface UcPageTitle {
    'counter': string;
  }
  interface UcPageTitleAttributes extends StencilHTMLAttributes {
    'counter'?: string;
  }

  interface UcParentLink {}
  interface UcParentLinkAttributes extends StencilHTMLAttributes {}

  interface UcPaymentSystemsItem {
    'dataSystem': string;
  }
  interface UcPaymentSystemsItemAttributes extends StencilHTMLAttributes {
    'dataSystem'?: string;
  }

  interface UcPaymentSystems {}
  interface UcPaymentSystemsAttributes extends StencilHTMLAttributes {}

  interface UcPlpButton {
    'checked': boolean;
    'typeButton': string;
  }
  interface UcPlpButtonAttributes extends StencilHTMLAttributes {
    'checked'?: boolean;
    'typeButton'?: string;
  }

  interface UcPlpChengeTyped {}
  interface UcPlpChengeTypedAttributes extends StencilHTMLAttributes {
    'onPlpChangeType'?: (event: CustomEvent) => void;
  }

  interface UcPlpItemButtons {}
  interface UcPlpItemButtonsAttributes extends StencilHTMLAttributes {}

  interface UcPlpItemDescriptionItem {}
  interface UcPlpItemDescriptionItemAttributes extends StencilHTMLAttributes {}

  interface UcPlpItemDescription {
    'typed': 'list' | 'card';
  }
  interface UcPlpItemDescriptionAttributes extends StencilHTMLAttributes {
    'typed'?: 'list' | 'card';
  }

  interface UcPlpItemImg {}
  interface UcPlpItemImgAttributes extends StencilHTMLAttributes {}

  interface UcPlpItemPrice {
    'content': string;
    'currency': string;
    'type': 'main' | 'second';
  }
  interface UcPlpItemPriceAttributes extends StencilHTMLAttributes {
    'content': string;
    'currency': string;
    'type'?: 'main' | 'second';
  }

  interface UcPlpItemPrices {}
  interface UcPlpItemPricesAttributes extends StencilHTMLAttributes {}

  interface UcPlpItemRating {
    'count': string;
    'rating': string;
  }
  interface UcPlpItemRatingAttributes extends StencilHTMLAttributes {
    'count'?: string;
    'rating'?: string;
  }

  interface UcPlpItemTitle {}
  interface UcPlpItemTitleAttributes extends StencilHTMLAttributes {}

  interface UcPlpItem {
    'typed': 'list' | 'card';
  }
  interface UcPlpItemAttributes extends StencilHTMLAttributes {
    'typed'?: 'list' | 'card';
  }

  interface UcPlpList {
    'typed': 'list' | 'card';
  }
  interface UcPlpListAttributes extends StencilHTMLAttributes {
    'typed'?: 'list' | 'card';
  }

  interface UcPlpWrapper {
    'showed': boolean;
    'sorted': boolean;
    'typed': boolean;
  }
  interface UcPlpWrapperAttributes extends StencilHTMLAttributes {
    'showed'?: boolean;
    'sorted'?: boolean;
    'typed'?: boolean;
  }

  interface UcSeoBlock {}
  interface UcSeoBlockAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'MyComponent': Components.MyComponent;
    'UcAdeoLink': Components.UcAdeoLink;
    'UcApp': Components.UcApp;
    'UcBreadcrumbItem': Components.UcBreadcrumbItem;
    'UcBreadcrumbList': Components.UcBreadcrumbList;
    'UcContainer': Components.UcContainer;
    'UcCurrentFilterGroup': Components.UcCurrentFilterGroup;
    'UcCurrentFilterItem': Components.UcCurrentFilterItem;
    'UcCurrentFilter': Components.UcCurrentFilter;
    'UcFacetAndList': Components.UcFacetAndList;
    'UcFacetCheckboxGroup': Components.UcFacetCheckboxGroup;
    'UcFacetCheckboxItem': Components.UcFacetCheckboxItem;
    'UcFacetSlider': Components.UcFacetSlider;
    'UcFacetToggle': Components.UcFacetToggle;
    'UcFacetsList': Components.UcFacetsList;
    'UcFooterAppMobile': Components.UcFooterAppMobile;
    'UcFooterApps': Components.UcFooterApps;
    'UcFooterLinkBlock': Components.UcFooterLinkBlock;
    'UcFooterMenuItem': Components.UcFooterMenuItem;
    'UcFooterMenuToggle': Components.UcFooterMenuToggle;
    'UcFooterMenu': Components.UcFooterMenu;
    'UcFooterSocialLinks': Components.UcFooterSocialLinks;
    'UcFooterSubscribe': Components.UcFooterSubscribe;
    'UcFooter': Components.UcFooter;
    'UcHeaderCatalog': Components.UcHeaderCatalog;
    'UcHeaderLogoImg': Components.UcHeaderLogoImg;
    'UcHeaderLogo': Components.UcHeaderLogo;
    'UcHeaderPanel': Components.UcHeaderPanel;
    'UcHeaderSearch': Components.UcHeaderSearch;
    'UcHeader': Components.UcHeader;
    'UcNckd': Components.UcNckd;
    'UcPageTitle': Components.UcPageTitle;
    'UcParentLink': Components.UcParentLink;
    'UcPaymentSystemsItem': Components.UcPaymentSystemsItem;
    'UcPaymentSystems': Components.UcPaymentSystems;
    'UcPlpButton': Components.UcPlpButton;
    'UcPlpChengeTyped': Components.UcPlpChengeTyped;
    'UcPlpItemButtons': Components.UcPlpItemButtons;
    'UcPlpItemDescriptionItem': Components.UcPlpItemDescriptionItem;
    'UcPlpItemDescription': Components.UcPlpItemDescription;
    'UcPlpItemImg': Components.UcPlpItemImg;
    'UcPlpItemPrice': Components.UcPlpItemPrice;
    'UcPlpItemPrices': Components.UcPlpItemPrices;
    'UcPlpItemRating': Components.UcPlpItemRating;
    'UcPlpItemTitle': Components.UcPlpItemTitle;
    'UcPlpItem': Components.UcPlpItem;
    'UcPlpList': Components.UcPlpList;
    'UcPlpWrapper': Components.UcPlpWrapper;
    'UcSeoBlock': Components.UcSeoBlock;
  }

  interface StencilIntrinsicElements {
    'my-component': Components.MyComponentAttributes;
    'uc-adeo-link': Components.UcAdeoLinkAttributes;
    'uc-app': Components.UcAppAttributes;
    'uc-breadcrumb-item': Components.UcBreadcrumbItemAttributes;
    'uc-breadcrumb-list': Components.UcBreadcrumbListAttributes;
    'uc-container': Components.UcContainerAttributes;
    'uc-current-filter-group': Components.UcCurrentFilterGroupAttributes;
    'uc-current-filter-item': Components.UcCurrentFilterItemAttributes;
    'uc-current-filter': Components.UcCurrentFilterAttributes;
    'uc-facet-and-list': Components.UcFacetAndListAttributes;
    'uc-facet-checkbox-group': Components.UcFacetCheckboxGroupAttributes;
    'uc-facet-checkbox-item': Components.UcFacetCheckboxItemAttributes;
    'uc-facet-slider': Components.UcFacetSliderAttributes;
    'uc-facet-toggle': Components.UcFacetToggleAttributes;
    'uc-facets-list': Components.UcFacetsListAttributes;
    'uc-footer-app-mobile': Components.UcFooterAppMobileAttributes;
    'uc-footer-apps': Components.UcFooterAppsAttributes;
    'uc-footer-link-block': Components.UcFooterLinkBlockAttributes;
    'uc-footer-menu-item': Components.UcFooterMenuItemAttributes;
    'uc-footer-menu-toggle': Components.UcFooterMenuToggleAttributes;
    'uc-footer-menu': Components.UcFooterMenuAttributes;
    'uc-footer-social-links': Components.UcFooterSocialLinksAttributes;
    'uc-footer-subscribe': Components.UcFooterSubscribeAttributes;
    'uc-footer': Components.UcFooterAttributes;
    'uc-header-catalog': Components.UcHeaderCatalogAttributes;
    'uc-header-logo-img': Components.UcHeaderLogoImgAttributes;
    'uc-header-logo': Components.UcHeaderLogoAttributes;
    'uc-header-panel': Components.UcHeaderPanelAttributes;
    'uc-header-search': Components.UcHeaderSearchAttributes;
    'uc-header': Components.UcHeaderAttributes;
    'uc-nckd': Components.UcNckdAttributes;
    'uc-page-title': Components.UcPageTitleAttributes;
    'uc-parent-link': Components.UcParentLinkAttributes;
    'uc-payment-systems-item': Components.UcPaymentSystemsItemAttributes;
    'uc-payment-systems': Components.UcPaymentSystemsAttributes;
    'uc-plp-button': Components.UcPlpButtonAttributes;
    'uc-plp-chenge-typed': Components.UcPlpChengeTypedAttributes;
    'uc-plp-item-buttons': Components.UcPlpItemButtonsAttributes;
    'uc-plp-item-description-item': Components.UcPlpItemDescriptionItemAttributes;
    'uc-plp-item-description': Components.UcPlpItemDescriptionAttributes;
    'uc-plp-item-img': Components.UcPlpItemImgAttributes;
    'uc-plp-item-price': Components.UcPlpItemPriceAttributes;
    'uc-plp-item-prices': Components.UcPlpItemPricesAttributes;
    'uc-plp-item-rating': Components.UcPlpItemRatingAttributes;
    'uc-plp-item-title': Components.UcPlpItemTitleAttributes;
    'uc-plp-item': Components.UcPlpItemAttributes;
    'uc-plp-list': Components.UcPlpListAttributes;
    'uc-plp-wrapper': Components.UcPlpWrapperAttributes;
    'uc-seo-block': Components.UcSeoBlockAttributes;
  }


  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLUcAdeoLinkElement extends Components.UcAdeoLink, HTMLStencilElement {}
  var HTMLUcAdeoLinkElement: {
    prototype: HTMLUcAdeoLinkElement;
    new (): HTMLUcAdeoLinkElement;
  };

  interface HTMLUcAppElement extends Components.UcApp, HTMLStencilElement {}
  var HTMLUcAppElement: {
    prototype: HTMLUcAppElement;
    new (): HTMLUcAppElement;
  };

  interface HTMLUcBreadcrumbItemElement extends Components.UcBreadcrumbItem, HTMLStencilElement {}
  var HTMLUcBreadcrumbItemElement: {
    prototype: HTMLUcBreadcrumbItemElement;
    new (): HTMLUcBreadcrumbItemElement;
  };

  interface HTMLUcBreadcrumbListElement extends Components.UcBreadcrumbList, HTMLStencilElement {}
  var HTMLUcBreadcrumbListElement: {
    prototype: HTMLUcBreadcrumbListElement;
    new (): HTMLUcBreadcrumbListElement;
  };

  interface HTMLUcContainerElement extends Components.UcContainer, HTMLStencilElement {}
  var HTMLUcContainerElement: {
    prototype: HTMLUcContainerElement;
    new (): HTMLUcContainerElement;
  };

  interface HTMLUcCurrentFilterGroupElement extends Components.UcCurrentFilterGroup, HTMLStencilElement {}
  var HTMLUcCurrentFilterGroupElement: {
    prototype: HTMLUcCurrentFilterGroupElement;
    new (): HTMLUcCurrentFilterGroupElement;
  };

  interface HTMLUcCurrentFilterItemElement extends Components.UcCurrentFilterItem, HTMLStencilElement {}
  var HTMLUcCurrentFilterItemElement: {
    prototype: HTMLUcCurrentFilterItemElement;
    new (): HTMLUcCurrentFilterItemElement;
  };

  interface HTMLUcCurrentFilterElement extends Components.UcCurrentFilter, HTMLStencilElement {}
  var HTMLUcCurrentFilterElement: {
    prototype: HTMLUcCurrentFilterElement;
    new (): HTMLUcCurrentFilterElement;
  };

  interface HTMLUcFacetAndListElement extends Components.UcFacetAndList, HTMLStencilElement {}
  var HTMLUcFacetAndListElement: {
    prototype: HTMLUcFacetAndListElement;
    new (): HTMLUcFacetAndListElement;
  };

  interface HTMLUcFacetCheckboxGroupElement extends Components.UcFacetCheckboxGroup, HTMLStencilElement {}
  var HTMLUcFacetCheckboxGroupElement: {
    prototype: HTMLUcFacetCheckboxGroupElement;
    new (): HTMLUcFacetCheckboxGroupElement;
  };

  interface HTMLUcFacetCheckboxItemElement extends Components.UcFacetCheckboxItem, HTMLStencilElement {}
  var HTMLUcFacetCheckboxItemElement: {
    prototype: HTMLUcFacetCheckboxItemElement;
    new (): HTMLUcFacetCheckboxItemElement;
  };

  interface HTMLUcFacetSliderElement extends Components.UcFacetSlider, HTMLStencilElement {}
  var HTMLUcFacetSliderElement: {
    prototype: HTMLUcFacetSliderElement;
    new (): HTMLUcFacetSliderElement;
  };

  interface HTMLUcFacetToggleElement extends Components.UcFacetToggle, HTMLStencilElement {}
  var HTMLUcFacetToggleElement: {
    prototype: HTMLUcFacetToggleElement;
    new (): HTMLUcFacetToggleElement;
  };

  interface HTMLUcFacetsListElement extends Components.UcFacetsList, HTMLStencilElement {}
  var HTMLUcFacetsListElement: {
    prototype: HTMLUcFacetsListElement;
    new (): HTMLUcFacetsListElement;
  };

  interface HTMLUcFooterAppMobileElement extends Components.UcFooterAppMobile, HTMLStencilElement {}
  var HTMLUcFooterAppMobileElement: {
    prototype: HTMLUcFooterAppMobileElement;
    new (): HTMLUcFooterAppMobileElement;
  };

  interface HTMLUcFooterAppsElement extends Components.UcFooterApps, HTMLStencilElement {}
  var HTMLUcFooterAppsElement: {
    prototype: HTMLUcFooterAppsElement;
    new (): HTMLUcFooterAppsElement;
  };

  interface HTMLUcFooterLinkBlockElement extends Components.UcFooterLinkBlock, HTMLStencilElement {}
  var HTMLUcFooterLinkBlockElement: {
    prototype: HTMLUcFooterLinkBlockElement;
    new (): HTMLUcFooterLinkBlockElement;
  };

  interface HTMLUcFooterMenuItemElement extends Components.UcFooterMenuItem, HTMLStencilElement {}
  var HTMLUcFooterMenuItemElement: {
    prototype: HTMLUcFooterMenuItemElement;
    new (): HTMLUcFooterMenuItemElement;
  };

  interface HTMLUcFooterMenuToggleElement extends Components.UcFooterMenuToggle, HTMLStencilElement {}
  var HTMLUcFooterMenuToggleElement: {
    prototype: HTMLUcFooterMenuToggleElement;
    new (): HTMLUcFooterMenuToggleElement;
  };

  interface HTMLUcFooterMenuElement extends Components.UcFooterMenu, HTMLStencilElement {}
  var HTMLUcFooterMenuElement: {
    prototype: HTMLUcFooterMenuElement;
    new (): HTMLUcFooterMenuElement;
  };

  interface HTMLUcFooterSocialLinksElement extends Components.UcFooterSocialLinks, HTMLStencilElement {}
  var HTMLUcFooterSocialLinksElement: {
    prototype: HTMLUcFooterSocialLinksElement;
    new (): HTMLUcFooterSocialLinksElement;
  };

  interface HTMLUcFooterSubscribeElement extends Components.UcFooterSubscribe, HTMLStencilElement {}
  var HTMLUcFooterSubscribeElement: {
    prototype: HTMLUcFooterSubscribeElement;
    new (): HTMLUcFooterSubscribeElement;
  };

  interface HTMLUcFooterElement extends Components.UcFooter, HTMLStencilElement {}
  var HTMLUcFooterElement: {
    prototype: HTMLUcFooterElement;
    new (): HTMLUcFooterElement;
  };

  interface HTMLUcHeaderCatalogElement extends Components.UcHeaderCatalog, HTMLStencilElement {}
  var HTMLUcHeaderCatalogElement: {
    prototype: HTMLUcHeaderCatalogElement;
    new (): HTMLUcHeaderCatalogElement;
  };

  interface HTMLUcHeaderLogoImgElement extends Components.UcHeaderLogoImg, HTMLStencilElement {}
  var HTMLUcHeaderLogoImgElement: {
    prototype: HTMLUcHeaderLogoImgElement;
    new (): HTMLUcHeaderLogoImgElement;
  };

  interface HTMLUcHeaderLogoElement extends Components.UcHeaderLogo, HTMLStencilElement {}
  var HTMLUcHeaderLogoElement: {
    prototype: HTMLUcHeaderLogoElement;
    new (): HTMLUcHeaderLogoElement;
  };

  interface HTMLUcHeaderPanelElement extends Components.UcHeaderPanel, HTMLStencilElement {}
  var HTMLUcHeaderPanelElement: {
    prototype: HTMLUcHeaderPanelElement;
    new (): HTMLUcHeaderPanelElement;
  };

  interface HTMLUcHeaderSearchElement extends Components.UcHeaderSearch, HTMLStencilElement {}
  var HTMLUcHeaderSearchElement: {
    prototype: HTMLUcHeaderSearchElement;
    new (): HTMLUcHeaderSearchElement;
  };

  interface HTMLUcHeaderElement extends Components.UcHeader, HTMLStencilElement {}
  var HTMLUcHeaderElement: {
    prototype: HTMLUcHeaderElement;
    new (): HTMLUcHeaderElement;
  };

  interface HTMLUcNckdElement extends Components.UcNckd, HTMLStencilElement {}
  var HTMLUcNckdElement: {
    prototype: HTMLUcNckdElement;
    new (): HTMLUcNckdElement;
  };

  interface HTMLUcPageTitleElement extends Components.UcPageTitle, HTMLStencilElement {}
  var HTMLUcPageTitleElement: {
    prototype: HTMLUcPageTitleElement;
    new (): HTMLUcPageTitleElement;
  };

  interface HTMLUcParentLinkElement extends Components.UcParentLink, HTMLStencilElement {}
  var HTMLUcParentLinkElement: {
    prototype: HTMLUcParentLinkElement;
    new (): HTMLUcParentLinkElement;
  };

  interface HTMLUcPaymentSystemsItemElement extends Components.UcPaymentSystemsItem, HTMLStencilElement {}
  var HTMLUcPaymentSystemsItemElement: {
    prototype: HTMLUcPaymentSystemsItemElement;
    new (): HTMLUcPaymentSystemsItemElement;
  };

  interface HTMLUcPaymentSystemsElement extends Components.UcPaymentSystems, HTMLStencilElement {}
  var HTMLUcPaymentSystemsElement: {
    prototype: HTMLUcPaymentSystemsElement;
    new (): HTMLUcPaymentSystemsElement;
  };

  interface HTMLUcPlpButtonElement extends Components.UcPlpButton, HTMLStencilElement {}
  var HTMLUcPlpButtonElement: {
    prototype: HTMLUcPlpButtonElement;
    new (): HTMLUcPlpButtonElement;
  };

  interface HTMLUcPlpChengeTypedElement extends Components.UcPlpChengeTyped, HTMLStencilElement {}
  var HTMLUcPlpChengeTypedElement: {
    prototype: HTMLUcPlpChengeTypedElement;
    new (): HTMLUcPlpChengeTypedElement;
  };

  interface HTMLUcPlpItemButtonsElement extends Components.UcPlpItemButtons, HTMLStencilElement {}
  var HTMLUcPlpItemButtonsElement: {
    prototype: HTMLUcPlpItemButtonsElement;
    new (): HTMLUcPlpItemButtonsElement;
  };

  interface HTMLUcPlpItemDescriptionItemElement extends Components.UcPlpItemDescriptionItem, HTMLStencilElement {}
  var HTMLUcPlpItemDescriptionItemElement: {
    prototype: HTMLUcPlpItemDescriptionItemElement;
    new (): HTMLUcPlpItemDescriptionItemElement;
  };

  interface HTMLUcPlpItemDescriptionElement extends Components.UcPlpItemDescription, HTMLStencilElement {}
  var HTMLUcPlpItemDescriptionElement: {
    prototype: HTMLUcPlpItemDescriptionElement;
    new (): HTMLUcPlpItemDescriptionElement;
  };

  interface HTMLUcPlpItemImgElement extends Components.UcPlpItemImg, HTMLStencilElement {}
  var HTMLUcPlpItemImgElement: {
    prototype: HTMLUcPlpItemImgElement;
    new (): HTMLUcPlpItemImgElement;
  };

  interface HTMLUcPlpItemPriceElement extends Components.UcPlpItemPrice, HTMLStencilElement {}
  var HTMLUcPlpItemPriceElement: {
    prototype: HTMLUcPlpItemPriceElement;
    new (): HTMLUcPlpItemPriceElement;
  };

  interface HTMLUcPlpItemPricesElement extends Components.UcPlpItemPrices, HTMLStencilElement {}
  var HTMLUcPlpItemPricesElement: {
    prototype: HTMLUcPlpItemPricesElement;
    new (): HTMLUcPlpItemPricesElement;
  };

  interface HTMLUcPlpItemRatingElement extends Components.UcPlpItemRating, HTMLStencilElement {}
  var HTMLUcPlpItemRatingElement: {
    prototype: HTMLUcPlpItemRatingElement;
    new (): HTMLUcPlpItemRatingElement;
  };

  interface HTMLUcPlpItemTitleElement extends Components.UcPlpItemTitle, HTMLStencilElement {}
  var HTMLUcPlpItemTitleElement: {
    prototype: HTMLUcPlpItemTitleElement;
    new (): HTMLUcPlpItemTitleElement;
  };

  interface HTMLUcPlpItemElement extends Components.UcPlpItem, HTMLStencilElement {}
  var HTMLUcPlpItemElement: {
    prototype: HTMLUcPlpItemElement;
    new (): HTMLUcPlpItemElement;
  };

  interface HTMLUcPlpListElement extends Components.UcPlpList, HTMLStencilElement {}
  var HTMLUcPlpListElement: {
    prototype: HTMLUcPlpListElement;
    new (): HTMLUcPlpListElement;
  };

  interface HTMLUcPlpWrapperElement extends Components.UcPlpWrapper, HTMLStencilElement {}
  var HTMLUcPlpWrapperElement: {
    prototype: HTMLUcPlpWrapperElement;
    new (): HTMLUcPlpWrapperElement;
  };

  interface HTMLUcSeoBlockElement extends Components.UcSeoBlock, HTMLStencilElement {}
  var HTMLUcSeoBlockElement: {
    prototype: HTMLUcSeoBlockElement;
    new (): HTMLUcSeoBlockElement;
  };

  interface HTMLElementTagNameMap {
    'my-component': HTMLMyComponentElement
    'uc-adeo-link': HTMLUcAdeoLinkElement
    'uc-app': HTMLUcAppElement
    'uc-breadcrumb-item': HTMLUcBreadcrumbItemElement
    'uc-breadcrumb-list': HTMLUcBreadcrumbListElement
    'uc-container': HTMLUcContainerElement
    'uc-current-filter-group': HTMLUcCurrentFilterGroupElement
    'uc-current-filter-item': HTMLUcCurrentFilterItemElement
    'uc-current-filter': HTMLUcCurrentFilterElement
    'uc-facet-and-list': HTMLUcFacetAndListElement
    'uc-facet-checkbox-group': HTMLUcFacetCheckboxGroupElement
    'uc-facet-checkbox-item': HTMLUcFacetCheckboxItemElement
    'uc-facet-slider': HTMLUcFacetSliderElement
    'uc-facet-toggle': HTMLUcFacetToggleElement
    'uc-facets-list': HTMLUcFacetsListElement
    'uc-footer-app-mobile': HTMLUcFooterAppMobileElement
    'uc-footer-apps': HTMLUcFooterAppsElement
    'uc-footer-link-block': HTMLUcFooterLinkBlockElement
    'uc-footer-menu-item': HTMLUcFooterMenuItemElement
    'uc-footer-menu-toggle': HTMLUcFooterMenuToggleElement
    'uc-footer-menu': HTMLUcFooterMenuElement
    'uc-footer-social-links': HTMLUcFooterSocialLinksElement
    'uc-footer-subscribe': HTMLUcFooterSubscribeElement
    'uc-footer': HTMLUcFooterElement
    'uc-header-catalog': HTMLUcHeaderCatalogElement
    'uc-header-logo-img': HTMLUcHeaderLogoImgElement
    'uc-header-logo': HTMLUcHeaderLogoElement
    'uc-header-panel': HTMLUcHeaderPanelElement
    'uc-header-search': HTMLUcHeaderSearchElement
    'uc-header': HTMLUcHeaderElement
    'uc-nckd': HTMLUcNckdElement
    'uc-page-title': HTMLUcPageTitleElement
    'uc-parent-link': HTMLUcParentLinkElement
    'uc-payment-systems-item': HTMLUcPaymentSystemsItemElement
    'uc-payment-systems': HTMLUcPaymentSystemsElement
    'uc-plp-button': HTMLUcPlpButtonElement
    'uc-plp-chenge-typed': HTMLUcPlpChengeTypedElement
    'uc-plp-item-buttons': HTMLUcPlpItemButtonsElement
    'uc-plp-item-description-item': HTMLUcPlpItemDescriptionItemElement
    'uc-plp-item-description': HTMLUcPlpItemDescriptionElement
    'uc-plp-item-img': HTMLUcPlpItemImgElement
    'uc-plp-item-price': HTMLUcPlpItemPriceElement
    'uc-plp-item-prices': HTMLUcPlpItemPricesElement
    'uc-plp-item-rating': HTMLUcPlpItemRatingElement
    'uc-plp-item-title': HTMLUcPlpItemTitleElement
    'uc-plp-item': HTMLUcPlpItemElement
    'uc-plp-list': HTMLUcPlpListElement
    'uc-plp-wrapper': HTMLUcPlpWrapperElement
    'uc-seo-block': HTMLUcSeoBlockElement
  }

  interface ElementTagNameMap {
    'my-component': HTMLMyComponentElement;
    'uc-adeo-link': HTMLUcAdeoLinkElement;
    'uc-app': HTMLUcAppElement;
    'uc-breadcrumb-item': HTMLUcBreadcrumbItemElement;
    'uc-breadcrumb-list': HTMLUcBreadcrumbListElement;
    'uc-container': HTMLUcContainerElement;
    'uc-current-filter-group': HTMLUcCurrentFilterGroupElement;
    'uc-current-filter-item': HTMLUcCurrentFilterItemElement;
    'uc-current-filter': HTMLUcCurrentFilterElement;
    'uc-facet-and-list': HTMLUcFacetAndListElement;
    'uc-facet-checkbox-group': HTMLUcFacetCheckboxGroupElement;
    'uc-facet-checkbox-item': HTMLUcFacetCheckboxItemElement;
    'uc-facet-slider': HTMLUcFacetSliderElement;
    'uc-facet-toggle': HTMLUcFacetToggleElement;
    'uc-facets-list': HTMLUcFacetsListElement;
    'uc-footer-app-mobile': HTMLUcFooterAppMobileElement;
    'uc-footer-apps': HTMLUcFooterAppsElement;
    'uc-footer-link-block': HTMLUcFooterLinkBlockElement;
    'uc-footer-menu-item': HTMLUcFooterMenuItemElement;
    'uc-footer-menu-toggle': HTMLUcFooterMenuToggleElement;
    'uc-footer-menu': HTMLUcFooterMenuElement;
    'uc-footer-social-links': HTMLUcFooterSocialLinksElement;
    'uc-footer-subscribe': HTMLUcFooterSubscribeElement;
    'uc-footer': HTMLUcFooterElement;
    'uc-header-catalog': HTMLUcHeaderCatalogElement;
    'uc-header-logo-img': HTMLUcHeaderLogoImgElement;
    'uc-header-logo': HTMLUcHeaderLogoElement;
    'uc-header-panel': HTMLUcHeaderPanelElement;
    'uc-header-search': HTMLUcHeaderSearchElement;
    'uc-header': HTMLUcHeaderElement;
    'uc-nckd': HTMLUcNckdElement;
    'uc-page-title': HTMLUcPageTitleElement;
    'uc-parent-link': HTMLUcParentLinkElement;
    'uc-payment-systems-item': HTMLUcPaymentSystemsItemElement;
    'uc-payment-systems': HTMLUcPaymentSystemsElement;
    'uc-plp-button': HTMLUcPlpButtonElement;
    'uc-plp-chenge-typed': HTMLUcPlpChengeTypedElement;
    'uc-plp-item-buttons': HTMLUcPlpItemButtonsElement;
    'uc-plp-item-description-item': HTMLUcPlpItemDescriptionItemElement;
    'uc-plp-item-description': HTMLUcPlpItemDescriptionElement;
    'uc-plp-item-img': HTMLUcPlpItemImgElement;
    'uc-plp-item-price': HTMLUcPlpItemPriceElement;
    'uc-plp-item-prices': HTMLUcPlpItemPricesElement;
    'uc-plp-item-rating': HTMLUcPlpItemRatingElement;
    'uc-plp-item-title': HTMLUcPlpItemTitleElement;
    'uc-plp-item': HTMLUcPlpItemElement;
    'uc-plp-list': HTMLUcPlpListElement;
    'uc-plp-wrapper': HTMLUcPlpWrapperElement;
    'uc-seo-block': HTMLUcSeoBlockElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}