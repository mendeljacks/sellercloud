export type post_token_type = {access_token?: string, token_type?: string, username?: string, expires_in?: number, '.issued'?: string, '.expires'?: string, }
export const post_token = async (
    base_url: string, 
    token: string,  
    body: {Username: string, Password: string, }, 
    axios: Function
): Promise<{data: post_token_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/token`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type put_catalog_basic_info_type = any
export const put_catalog_basic_info = async (
    base_url: string, 
    token: string,  
    body: {ProductID: string, ShortDescription?: string, LongDescription?: string, ListPrice?: number, SitePrice?: number, SiteCost?: number, ProductName?: string, IsActive?: boolean, MasterSKU?: string, ManufacturerSKU?: string, UPC?: string, ASIN?: string, FNSKU?: string, EAN?: string, GTIN?: string, }, 
    axios: Function
): Promise<{data: put_catalog_basic_info_type}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Catalog/BasicInfo`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_catalog_id_prices_type = {SitePrice?: number, ChannelsPrices?: Array<{ChannelID: number, Price?: number, UseDefaultSitePrice?: boolean, }>, }
export const get_catalog_id_prices = async (
    base_url: string, 
    token: string, 
    path: {id: string},  
    axios: Function
): Promise<{data: get_catalog_id_prices_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/${path.id}/Prices`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type put_catalog_id_prices_type = any
export const put_catalog_id_prices = async (
    base_url: string, 
    token: string, 
    path: {id: string}, 
    body: {SitePrice?: number, ChannelsPrices?: Array<{ChannelID: number, Price?: number, UseDefaultSitePrice?: boolean, }>, }, 
    axios: Function
): Promise<{data: put_catalog_id_prices_type}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Catalog/${path.id}/Prices`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_catalog_prices_type = {SitePrice?: number, ChannelsPrices?: Array<{ChannelID: number, Price?: number, UseDefaultSitePrice?: boolean, }>, }
export const get_catalog_prices = async (
    base_url: string, 
    token: string,   
    query: {productID: string},
    axios: Function
): Promise<{data: get_catalog_prices_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Prices`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type put_catalog_prices_type = any
export const put_catalog_prices = async (
    base_url: string, 
    token: string,  
    body: {ProductID: string, SitePrice?: number, ChannelsPrices?: Array<{ChannelID: number, Price?: number, UseDefaultSitePrice?: boolean, }>, }, 
    axios: Function
): Promise<{data: put_catalog_prices_type}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Catalog/Prices`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_catalog_views_type = any
export const get_catalog_views = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: get_catalog_views_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Views`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type get_catalog_get_all_by_view_type = {Items?: Array<{ImageUrl?: string, Weight?: number, ShippingWeight?: number, WeightOz?: number, PackageWeightLbs?: number, PackageWeightOz?: number, LocationNotes?: string, eBayCategory?: string, eBayStoreCategory?: string, eBayItemCondition?: string, MAPPrice?: number, ShadowOf?: string, AverageCost?: number, Priority?: number, Rating?: number, ProductName?: string, ShortDescription?: string, LongDescription?: string, Buyer?: string, ASIN?: string, GTIN?: string, QtySold15?: number, QtySold30?: number, QtySold60?: number, QtySold90?: number, QtySold180?: number, QtySold365?: number, QtySoldYTD?: number, IsEndOfLife?: boolean, ShippingCost?: number, AggregatePhysicalQtyFBA?: number, AggregatePhysicalQty?: number, AggregateQty?: number, ProductType?: string, DefaultVendor?: string, DefaultVendorSKU?: string, HomeCountryCode?: number, Country?: string, AmazonMarketPlaceID?: string, OverstockGeneratedProductID?: string, ReverbListingID?: number, WalmartProductID?: string, WPID?: string, ItemPageURL?: string, CompanyName?: string, CompanyNameAbbreviation?: string, FirstKitChild?: string, WarehousePhysicalQty?: number, WarehousePhysicalQtyValue?: number, WarehouseReservedQtyValue?: number, AggregatedQty?: number, AggregatePhysicalSellableQtyIncludingPhysicalValue?: number, ReservedQty?: number, ReserveQtyTotalValue?: number, PhysicalQty?: number, AggregateNonSellableQty?: number, StorePrice?: number, ManufacturerSKU?: string, ManufacturerID?: number, BrandID?: number, ASINInActiveListing?: string, WeightLbs?: number, UPC?: string, AmazonFBASKU?: string, NELiveInventory?: number, NEBizInventory?: number, WebsiteViewURL?: string, WishProductID?: string, FulfilledBy?: number, SalesRank?: number, AmazonProductCondition?: number, AmazonCondition?: string, MainProductID?: string, FixedPriceQuantity?: number, BuyItNowPrice?: number, ShippingTemplateID?: string, ListPrice?: number, SalePrice?: number, SalePriceStartDate?: string, SalePriceEndDate?: string, DropShipMode?: number, eBayCategory1ID?: string, eBayCategory1Name?: string, eBayTopTitle?: string, ProductTitleCount?: number, DescriptionTemplateID?: string, ebayItemID?: string, ebaySiteCode?: number, ProductConditionName?: string, NotesCount?: number, OrderReserveTotal?: number, VendorOfProduct?: string, VendorPrice?: number, ReplacementQty?: number, WarehouseName?: string, IsSellAble?: boolean, WarehouseCount?: number, CompanyID?: number, EnabledOnChannels?: Array<number>, WebEnabled?: boolean, BuyDotComEnabled?: boolean, MagentoEnabled?: boolean, SearsEnabled?: boolean, PriceGrabberEnabled?: boolean, OverStockEnabled?: boolean, PriceFallEnabled?: boolean, UnbeatableSalesEnabled?: boolean, eBayEnabled?: boolean, AmazonEnabled?: boolean, WayfairEnabled?: boolean, VendorCentralEnabled?: boolean, BonanzaEnabled?: boolean, SmartBargainsEnabled?: boolean, ATGStoresEnabled?: boolean, BestBuyEnabled?: boolean, BestBuyDsEnabled?: boolean, KohlsEnabled?: boolean, HomeDepotEnabled?: boolean, StaplesEnabled?: boolean, MeijerEnabled?: boolean, OneStopPlusEnabled?: boolean, SonsiEnabled?: boolean, KMartEnabled?: boolean, ElevenMainEnabled?: boolean, GroupOnGoodsEnabled?: boolean, GrouponMarketplaceEnabled?: boolean, WalmartEnabled?: boolean, WalmartAPIEnabled?: boolean, WishEnabled?: boolean, JETEnabled?: boolean, EtsyEnabled?: boolean, FingerHutEnabled?: boolean, TopHatterEnabled?: boolean, TangaEnabled?: boolean, TargetEnabled?: boolean, NewEggDotComEnabled?: boolean, NewEggBizEnabled?: boolean, YahooStoreEnabled?: boolean, HayneedleEnabled?: boolean, ReverbEnabled?: boolean, DropShipCentralEnabled?: boolean, DrugStoresEnabled?: boolean, CdiscountEnabled?: boolean, BedBathAndBeyondEnabled?: boolean, ShopHQEnabled?: boolean, GoogleShoppingEnabled?: boolean, HouzzEnabled?: boolean, IsMatrixParent?: boolean, MerchantSKU?: string, AmazonMerchantSKU?: string, WayfairMerchantSKU?: string, WebsiteProductID?: string, ChannelPreviews?: Array<{Channel?: number, URL?: string, }>, ActiveRebateID?: number, ActiveRebateValue?: number, ActiveRebateDeductFromItemCost?: number, DeductFromItemCostType?: number, Status?: number, InventoryDependantOption?: number, OnOrder?: number, AmazonPrice?: number, VendorID?: number, LastAggregateDate?: string, LastModifiedDate?: string, AmazonMarketplace?: string, OnBackOrder?: number, BackOrderVisible?: boolean, WholeSalePrice?: number, WholeSalePriceVisible?: boolean, SitePrice?: number, SiteCost?: number, IsKit?: boolean, SiteCostVisible?: boolean, LastCost?: number, LastCostVisible?: boolean, ShowPriorityAndRatingDelta?: boolean, InventoryAvailableQty?: number, ChildProducts?: Array<{ProductId?: string, ChildProductId?: string, PerKitQty?: number, ProductName?: string, }>, CustomColumns?: Array<{ID?: number, DataType?: number, DataLength?: number, IsDropDownColumn?: boolean, IsDropDownCustomTextAllowed?: boolean, IsDropDownAllowMultipleSelection?: boolean, ClientID?: number, NewValue?: {}, AllowHTMLPopup?: boolean, DataSourceContainer?: Array<{Key?: string, Value?: string, Additional?: {}, }>, IsRequired?: boolean, ColumnName?: string, DisplayName?: string, Value?: {}, }>, AmazonStoreStatus?: boolean, AmazonEnableBOPISProduct?: boolean, ID?: string, }>, TotalResults?: number, }
export const get_catalog_get_all_by_view = async (
    base_url: string, 
    token: string,   
    query: {viewID: number,pageNumber: number,pageSize: number},
    axios: Function
): Promise<{data: get_catalog_get_all_by_view_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/GetAllByView`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type get_catalog_product_types_type = {Items?: Array<{CompanyID?: number, CompanyName?: string, IsDefault?: boolean, ProductTypeName?: string, BuyDotComCategoryID?: string, NewEggCategory?: string, PriceLevel?: number, ID?: number, }>, TotalResults?: number, }
export const get_catalog_product_types = async (
    base_url: string, 
    token: string,   
    query: {productTypeIds?: Array<number>,typeNames?: Array<string>,pageNumber?: number,pageSize?: number},
    axios: Function
): Promise<{data: get_catalog_product_types_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/ProductTypes`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type get_catalog_variation_dimensions_type = {Items?: Array<{UniqueName?: string, ID?: number, ClientID?: number, Name?: string, Abbreviation?: string, ManufacturerName?: string, ProductTypeName?: string, Values?: Array<{ID?: number, DimensionID?: number, Value?: string, ObjectValue?: {}, Abbreviation?: string, SortOrder?: number, }>, }>, TotalResults?: number, }
export const get_catalog_variation_dimensions = async (
    base_url: string, 
    token: string,   
    query: {searchTerm?: string,pageNumber?: number,pageSize?: number},
    axios: Function
): Promise<{data: get_catalog_variation_dimensions_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/VariationDimensions`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type get_catalog_variation_type = {Matrix?: undefined, Images?: undefined, }
export const get_catalog_variation = async (
    base_url: string, 
    token: string,   
    query: {productID?: string,pageNumber?: number,pageSize?: number},
    axios: Function
): Promise<{data: get_catalog_variation_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Variation`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type get_catalog_type = {Items?: Array<{ImageUrl?: string, Weight?: number, ShippingWeight?: number, WeightOz?: number, PackageWeightLbs?: number, PackageWeightOz?: number, LocationNotes?: string, eBayCategory?: string, eBayStoreCategory?: string, eBayItemCondition?: string, MAPPrice?: number, ShadowOf?: string, AverageCost?: number, Priority?: number, Rating?: number, ProductName?: string, ShortDescription?: string, LongDescription?: string, Buyer?: string, ASIN?: string, GTIN?: string, QtySold15?: number, QtySold30?: number, QtySold60?: number, QtySold90?: number, QtySold180?: number, QtySold365?: number, QtySoldYTD?: number, IsEndOfLife?: boolean, ShippingCost?: number, AggregatePhysicalQtyFBA?: number, AggregatePhysicalQty?: number, AggregateQty?: number, ProductType?: string, DefaultVendor?: string, DefaultVendorSKU?: string, HomeCountryCode?: number, Country?: string, AmazonMarketPlaceID?: string, OverstockGeneratedProductID?: string, ReverbListingID?: number, WalmartProductID?: string, WPID?: string, ItemPageURL?: string, CompanyName?: string, CompanyNameAbbreviation?: string, FirstKitChild?: string, WarehousePhysicalQty?: number, WarehousePhysicalQtyValue?: number, WarehouseReservedQtyValue?: number, AggregatedQty?: number, AggregatePhysicalSellableQtyIncludingPhysicalValue?: number, ReservedQty?: number, ReserveQtyTotalValue?: number, PhysicalQty?: number, AggregateNonSellableQty?: number, StorePrice?: number, ManufacturerSKU?: string, ManufacturerID?: number, BrandID?: number, ASINInActiveListing?: string, WeightLbs?: number, UPC?: string, AmazonFBASKU?: string, NELiveInventory?: number, NEBizInventory?: number, WebsiteViewURL?: string, WishProductID?: string, FulfilledBy?: number, SalesRank?: number, AmazonProductCondition?: number, AmazonCondition?: string, MainProductID?: string, FixedPriceQuantity?: number, BuyItNowPrice?: number, ShippingTemplateID?: string, ListPrice?: number, SalePrice?: number, SalePriceStartDate?: string, SalePriceEndDate?: string, DropShipMode?: number, eBayCategory1ID?: string, eBayCategory1Name?: string, eBayTopTitle?: string, ProductTitleCount?: number, DescriptionTemplateID?: string, ebayItemID?: string, ebaySiteCode?: number, ProductConditionName?: string, NotesCount?: number, OrderReserveTotal?: number, VendorOfProduct?: string, VendorPrice?: number, ReplacementQty?: number, WarehouseName?: string, IsSellAble?: boolean, WarehouseCount?: number, CompanyID?: number, EnabledOnChannels?: Array<number>, WebEnabled?: boolean, BuyDotComEnabled?: boolean, MagentoEnabled?: boolean, SearsEnabled?: boolean, PriceGrabberEnabled?: boolean, OverStockEnabled?: boolean, PriceFallEnabled?: boolean, UnbeatableSalesEnabled?: boolean, eBayEnabled?: boolean, AmazonEnabled?: boolean, WayfairEnabled?: boolean, VendorCentralEnabled?: boolean, BonanzaEnabled?: boolean, SmartBargainsEnabled?: boolean, ATGStoresEnabled?: boolean, BestBuyEnabled?: boolean, BestBuyDsEnabled?: boolean, KohlsEnabled?: boolean, HomeDepotEnabled?: boolean, StaplesEnabled?: boolean, MeijerEnabled?: boolean, OneStopPlusEnabled?: boolean, SonsiEnabled?: boolean, KMartEnabled?: boolean, ElevenMainEnabled?: boolean, GroupOnGoodsEnabled?: boolean, GrouponMarketplaceEnabled?: boolean, WalmartEnabled?: boolean, WalmartAPIEnabled?: boolean, WishEnabled?: boolean, JETEnabled?: boolean, EtsyEnabled?: boolean, FingerHutEnabled?: boolean, TopHatterEnabled?: boolean, TangaEnabled?: boolean, TargetEnabled?: boolean, NewEggDotComEnabled?: boolean, NewEggBizEnabled?: boolean, YahooStoreEnabled?: boolean, HayneedleEnabled?: boolean, ReverbEnabled?: boolean, DropShipCentralEnabled?: boolean, DrugStoresEnabled?: boolean, CdiscountEnabled?: boolean, BedBathAndBeyondEnabled?: boolean, ShopHQEnabled?: boolean, GoogleShoppingEnabled?: boolean, HouzzEnabled?: boolean, IsMatrixParent?: boolean, MerchantSKU?: string, AmazonMerchantSKU?: string, WayfairMerchantSKU?: string, WebsiteProductID?: string, ChannelPreviews?: Array<{Channel?: number, URL?: string, }>, ActiveRebateID?: number, ActiveRebateValue?: number, ActiveRebateDeductFromItemCost?: number, DeductFromItemCostType?: number, Status?: number, InventoryDependantOption?: number, OnOrder?: number, AmazonPrice?: number, VendorID?: number, LastAggregateDate?: string, LastModifiedDate?: string, AmazonMarketplace?: string, OnBackOrder?: number, BackOrderVisible?: boolean, WholeSalePrice?: number, WholeSalePriceVisible?: boolean, SitePrice?: number, SiteCost?: number, IsKit?: boolean, SiteCostVisible?: boolean, LastCost?: number, LastCostVisible?: boolean, ShowPriorityAndRatingDelta?: boolean, InventoryAvailableQty?: number, ChildProducts?: Array<{ProductId?: string, ChildProductId?: string, PerKitQty?: number, ProductName?: string, }>, CustomColumns?: Array<{ID?: number, DataType?: number, DataLength?: number, IsDropDownColumn?: boolean, IsDropDownCustomTextAllowed?: boolean, IsDropDownAllowMultipleSelection?: boolean, ClientID?: number, NewValue?: {}, AllowHTMLPopup?: boolean, DataSourceContainer?: Array<{Key?: string, Value?: string, Additional?: {}, }>, IsRequired?: boolean, ColumnName?: string, DisplayName?: string, Value?: {}, }>, AmazonStoreStatus?: boolean, AmazonEnableBOPISProduct?: boolean, ID?: string, }>, TotalResults?: number, }
export const get_catalog = async (
    base_url: string, 
    token: string,   
    query: {sKU?: string,displayShadows?: number,selectedKits?: number,activeStatus?: number,poID?: Array<number>,companyID?: Array<number>,vendorID?: Array<number>,defaultVendorID?: Array<number>,vendorSKU?: Array<string>,warehouse?: Array<number>,uPC?: string,physicalQtyFrom?: number,physicalQtyTo?: number,kitType?: number,lastAggregateFrom?: string,lastAggregateTo?: string,lastUpdatedFrom?: string,lastUpdatedTo?: string,keyword?: string,pageNumber?: number,pageSize?: number},
    axios: Function
): Promise<{data: get_catalog_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type get_catalog_imports_basic_imports_types_type = any
export const get_catalog_imports_basic_imports_types = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: get_catalog_imports_basic_imports_types_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Imports/BasicImports/Types`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type get_catalog_imports_basic_imports_type_of_import_template_type = {FileName?: string, Content?: string, }
export const get_catalog_imports_basic_imports_type_of_import_template = async (
    base_url: string, 
    token: string, 
    path: {typeOfImport: number},  
    query: {fileFormat: number},
    axios: Function
): Promise<{data: get_catalog_imports_basic_imports_type_of_import_template_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Imports/BasicImports/${path.typeOfImport}/Template`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type post_catalog_imports_basic_imports_type_of_import_type = {QueuedJobLink?: string, ID?: number, Message?: string, }
export const post_catalog_imports_basic_imports_type_of_import = async (
    base_url: string, 
    token: string, 
    path: {typeOfImport: number}, 
    body: {FileContents: string, Format?: number, }, 
    axios: Function
): Promise<{data: post_catalog_imports_basic_imports_type_of_import_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Catalog/Imports/BasicImports/${path.typeOfImport}`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_catalog_imports_custom_templates_type = any
export const get_catalog_imports_custom_templates = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: get_catalog_imports_custom_templates_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Imports/Custom/Templates`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type post_catalog_imports_custom_templates_type = any
export const post_catalog_imports_custom_templates = async (
    base_url: string, 
    token: string,  
    body: {TemplateFields: Array<string>, TemplateName: string, }, 
    axios: Function
): Promise<{data: post_catalog_imports_custom_templates_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Catalog/Imports/Custom/Templates`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_catalog_imports_custom_templates_fields_type = any
export const get_catalog_imports_custom_templates_fields = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: get_catalog_imports_custom_templates_fields_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Imports/Custom/Templates/Fields`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type get_catalog_imports_custom_templates_template_name_type = {Data?: undefined, ResultType?: number, Message?: string, }
export const get_catalog_imports_custom_templates_template_name = async (
    base_url: string, 
    token: string, 
    path: {templateName: string},  
    axios: Function
): Promise<{data: get_catalog_imports_custom_templates_template_name_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Imports/Custom/Templates/${path.templateName}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type delete_catalog_imports_custom_templates_template_name_type = any
export const delete_catalog_imports_custom_templates_template_name = async (
    base_url: string, 
    token: string, 
    path: {templateName: string},  
    axios: Function
): Promise<{data: delete_catalog_imports_custom_templates_template_name_type}> => {
    return axios({
        method: 'DELETE', 
        url: `${base_url}/api/Catalog/Imports/Custom/Templates/${path.templateName}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type get_catalog_imports_custom_template_type = {FileName?: string, Content?: string, }
export const get_catalog_imports_custom_template = async (
    base_url: string, 
    token: string,   
    query: {templateName?: string,templateFields?: Array<string>,toAddSampleRow?: boolean,productId?: string,fileFormat?: number,formatProduct?: number},
    axios: Function
): Promise<{data: get_catalog_imports_custom_template_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Imports/Custom/Template`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type post_catalog_imports_custom_type = {QueuedJobLink?: string, ID?: number, Message?: string, }
export const post_catalog_imports_custom = async (
    base_url: string, 
    token: string,  
    body: {Metadata: undefined, FileContents: string, Format?: number, }, 
    axios: Function
): Promise<{data: post_catalog_imports_custom_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Catalog/Imports/Custom`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type post_catalog_exports_basic_type = {QueuedJobLink?: string, }
export const post_catalog_exports_basic = async (
    base_url: string, 
    token: string,  
    body: {StandardExportKind?: number, ProductIds: Array<string>, }, 
    axios: Function
): Promise<{data: post_catalog_exports_basic_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Catalog/Exports/Basic`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_catalog_exports_custom_metadata_type = {FileFormats?: Array<{Key?: number, Value?: string, }>, CustomTemplates?: Array<{Key?: number, Value?: string, }>, AvailableColumns?: Array<{Key?: string, Value?: string, }>, }
export const get_catalog_exports_custom_metadata = async (
    base_url: string, 
    token: string,   
    query: {includeAdvancedColumns?: boolean},
    axios: Function
): Promise<{data: get_catalog_exports_custom_metadata_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Exports/Custom/Metadata`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type post_catalog_exports_custom_type = {FileName?: string, Content?: string, }
export const post_catalog_exports_custom = async (
    base_url: string, 
    token: string,  
    body: {Columns: Array<{OriginalName: string, DisplayName?: string, }>, FileFormat?: number, SortBy?: string, ProductIds: Array<string>, }, 
    axios: Function
): Promise<{data: post_catalog_exports_custom_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Catalog/Exports/Custom`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_catalog_exports_custom_templates_id_type = {TemplateId?: number, TemplateName?: string, TemplateColumns?: Array<{Key?: string, Value?: string, DisplayName?: string, Additional?: string, }>, }
export const get_catalog_exports_custom_templates_id = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: get_catalog_exports_custom_templates_id_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Exports/Custom/Templates/${path.id}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type get_catalog_exports_via_plugin_metadata_type = {Plugins?: Array<{Key?: string, Value?: string, }>, }
export const get_catalog_exports_via_plugin_metadata = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: get_catalog_exports_via_plugin_metadata_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Exports/ViaPlugin/Metadata`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type post_catalog_exports_via_plugin_type = {QueuedJobLink?: string, }
export const post_catalog_exports_via_plugin = async (
    base_url: string, 
    token: string,  
    body: {PluginProfileKey: string, FileFormat?: number, ProductIds: Array<string>, }, 
    axios: Function
): Promise<{data: post_catalog_exports_via_plugin_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Catalog/Exports/ViaPlugin`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_catalog_exports_via_mapping_profile_metadata_type = {MappingProfiles?: Array<{Key?: string, Value?: string, }>, }
export const get_catalog_exports_via_mapping_profile_metadata = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: get_catalog_exports_via_mapping_profile_metadata_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Exports/ViaMappingProfile/Metadata`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type post_catalog_exports_via_mapping_profile_type = {QueuedJobLink?: string, }
export const post_catalog_exports_via_mapping_profile = async (
    base_url: string, 
    token: string,  
    body: {PluginProfileKey: string, FileFormat?: number, ProductIds: Array<string>, }, 
    axios: Function
): Promise<{data: post_catalog_exports_via_mapping_profile_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Catalog/Exports/ViaMappingProfile`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_catalog_imports_per_company_types_type = any
export const get_catalog_imports_per_company_types = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: get_catalog_imports_per_company_types_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Imports/PerCompany/Types`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type get_catalog_imports_per_company_type_of_import_template_type = {FileName?: string, Content?: string, }
export const get_catalog_imports_per_company_type_of_import_template = async (
    base_url: string, 
    token: string, 
    path: {typeOfImport: number},  
    query: {fileFormat: number},
    axios: Function
): Promise<{data: get_catalog_imports_per_company_type_of_import_template_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Imports/PerCompany/${path.typeOfImport}/Template`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type post_catalog_imports_per_company_company_id_type_of_import_type = {QueuedJobLink?: string, ID?: number, Message?: string, }
export const post_catalog_imports_per_company_company_id_type_of_import = async (
    base_url: string, 
    token: string, 
    path: {companyId: number,typeOfImport: number}, 
    body: {Metadata: undefined, FileContents: string, Format?: number, }, 
    axios: Function
): Promise<{data: post_catalog_imports_per_company_company_id_type_of_import_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Catalog/Imports/PerCompany/${path.companyId}/${path.typeOfImport}`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_catalog_imports_variations_template_type = {FileName?: string, Content?: string, }
export const get_catalog_imports_variations_template = async (
    base_url: string, 
    token: string,   
    query: {fileFormat: number},
    axios: Function
): Promise<{data: get_catalog_imports_variations_template_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Imports/Variations/Template`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type get_catalog_imports_shadows_template_type = {FileName?: string, Content?: string, }
export const get_catalog_imports_shadows_template = async (
    base_url: string, 
    token: string,   
    query: {fileFormat: number},
    axios: Function
): Promise<{data: get_catalog_imports_shadows_template_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Imports/Shadows/Template`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type get_catalog_imports_kits_template_type = {FileName?: string, Content?: string, }
export const get_catalog_imports_kits_template = async (
    base_url: string, 
    token: string,   
    query: {fileFormat: number},
    axios: Function
): Promise<{data: get_catalog_imports_kits_template_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Imports/Kits/Template`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type get_catalog_imports_ebay_specifics_template_type = {FileName?: string, Content?: string, }
export const get_catalog_imports_ebay_specifics_template = async (
    base_url: string, 
    token: string,   
    query: {fileFormat: number},
    axios: Function
): Promise<{data: get_catalog_imports_ebay_specifics_template_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Imports/EbaySpecifics/Template`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type get_catalog_imports_newegg_biz_attributes_template_type = {FileName?: string, Content?: string, }
export const get_catalog_imports_newegg_biz_attributes_template = async (
    base_url: string, 
    token: string,   
    query: {fileFormat: number,multiFormat: boolean},
    axios: Function
): Promise<{data: get_catalog_imports_newegg_biz_attributes_template_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Imports/NeweggBizAttributes/Template`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type get_catalog_imports_newegg_com_attributes_template_type = {FileName?: string, Content?: string, }
export const get_catalog_imports_newegg_com_attributes_template = async (
    base_url: string, 
    token: string,   
    query: {fileFormat: number,multiFormat: boolean},
    axios: Function
): Promise<{data: get_catalog_imports_newegg_com_attributes_template_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Imports/NeweggComAttributes/Template`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type get_catalog_imports_variations_images_template_type = {FileName?: string, Content?: string, }
export const get_catalog_imports_variations_images_template = async (
    base_url: string, 
    token: string,   
    query: {fileFormat: number},
    axios: Function
): Promise<{data: get_catalog_imports_variations_images_template_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Imports/Variations/Images/Template`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type get_catalog_imports_images_template_type = {FileName?: string, Content?: string, }
export const get_catalog_imports_images_template = async (
    base_url: string, 
    token: string,   
    query: {fileFormat: number},
    axios: Function
): Promise<{data: get_catalog_imports_images_template_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Imports/Images/Template`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type post_catalog_imports_variations_type = {QueuedJobLink?: string, ID?: number, Message?: string, }
export const post_catalog_imports_variations = async (
    base_url: string, 
    token: string,  
    body: {Metadata: undefined, FileContents: string, Format?: number, }, 
    axios: Function
): Promise<{data: post_catalog_imports_variations_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Catalog/Imports/Variations`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type post_catalog_imports_shadows_type = {QueuedJobLink?: string, ID?: number, Message?: string, }
export const post_catalog_imports_shadows = async (
    base_url: string, 
    token: string,  
    body: {Metadata: undefined, FileContents: string, Format?: number, }, 
    axios: Function
): Promise<{data: post_catalog_imports_shadows_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Catalog/Imports/Shadows`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type post_catalog_imports_kits_type = {QueuedJobLink?: string, ID?: number, Message?: string, }
export const post_catalog_imports_kits = async (
    base_url: string, 
    token: string,  
    body: {Metadata: undefined, FileContents: string, Format?: number, }, 
    axios: Function
): Promise<{data: post_catalog_imports_kits_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Catalog/Imports/Kits`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type post_catalog_imports_ebay_specifics_type = {QueuedJobLink?: string, ID?: number, Message?: string, }
export const post_catalog_imports_ebay_specifics = async (
    base_url: string, 
    token: string,  
    body: {Metadata: undefined, FileContents: string, Format?: number, }, 
    axios: Function
): Promise<{data: post_catalog_imports_ebay_specifics_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Catalog/Imports/EbaySpecifics`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type post_catalog_imports_newegg_biz_attributes_type = {QueuedJobLink?: string, ID?: number, Message?: string, }
export const post_catalog_imports_newegg_biz_attributes = async (
    base_url: string, 
    token: string,  
    body: {Metadata: undefined, FileContents: string, Format?: number, }, 
    axios: Function
): Promise<{data: post_catalog_imports_newegg_biz_attributes_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Catalog/Imports/NeweggBizAttributes`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type post_catalog_imports_newegg_com_attributes_type = {QueuedJobLink?: string, ID?: number, Message?: string, }
export const post_catalog_imports_newegg_com_attributes = async (
    base_url: string, 
    token: string,  
    body: {Metadata: undefined, FileContents: string, Format?: number, }, 
    axios: Function
): Promise<{data: post_catalog_imports_newegg_com_attributes_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Catalog/Imports/NeweggComAttributes`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type post_catalog_imports_variations_images_type = {QueuedJobLink?: string, ID?: number, Message?: string, }
export const post_catalog_imports_variations_images = async (
    base_url: string, 
    token: string,  
    body: {FileContents: string, Format?: number, }, 
    axios: Function
): Promise<{data: post_catalog_imports_variations_images_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Catalog/Imports/Variations/Images`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type post_catalog_imports_images_type = {QueuedJobLink?: string, ID?: number, Message?: string, }
export const post_catalog_imports_images = async (
    base_url: string, 
    token: string,  
    body: {FileContents: string, Format?: number, }, 
    axios: Function
): Promise<{data: post_catalog_imports_images_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Catalog/Imports/Images`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_companies_id_shipping_api_type = {UPSApi?: undefined, FedExApi?: undefined, FedExApiOld?: undefined, EndiciaApi?: undefined, }
export const get_companies_id_shipping_api = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: get_companies_id_shipping_api_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Companies/${path.id}/ShippingApi`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type get_companies_id_settings_ebay_business_policies_type = {Policies?: Array<{Id?: string, Type?: number, Name?: string, Version?: string, Description?: string, }>, TotalPolicies?: number, }
export const get_companies_id_settings_ebay_business_policies = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    query: {siteCode: number,pageNumber?: number,pageSize?: number},
    axios: Function
): Promise<{data: get_companies_id_settings_ebay_business_policies_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Companies/${path.id}/Settings/ebay/BusinessPolicies`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type get_companies_id_settings_ebay_site_codes_type = any
export const get_companies_id_settings_ebay_site_codes = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: get_companies_id_settings_ebay_site_codes_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Companies/${path.id}/Settings/ebay/SiteCodes`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type get_companies_id_type = {Details?: undefined, Address?: undefined, AmazonSettings?: undefined, IsModified?: boolean, }
export const get_companies_id = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: get_companies_id_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Companies/${path.id}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type get_companies_type = {Items?: Array<{CompanyName?: string, IsDefaultCompany?: boolean, AmazonMarketplace?: string, IsDisabled?: boolean, CustomColumns?: Array<{ID?: number, DataType?: number, DataLength?: number, IsDropDownColumn?: boolean, IsDropDownCustomTextAllowed?: boolean, IsDropDownAllowMultipleSelection?: boolean, ClientID?: number, NewValue?: {}, AllowHTMLPopup?: boolean, DataSourceContainer?: Array<{Key?: string, Value?: string, Additional?: {}, }>, IsRequired?: boolean, ColumnName?: string, DisplayName?: string, Value?: {}, }>, EnabledOnChannels?: Array<number>, ScheduledTasksCount?: number, ID?: number, }>, TotalResults?: number, }
export const get_companies = async (
    base_url: string, 
    token: string,   
    query: {companyID?: Array<number>,channel?: Array<number>,keyword?: string,pageNumber?: number,pageSize?: number},
    axios: Function
): Promise<{data: get_companies_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Companies`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type put_customers_id_custom_columns_type = any
export const put_customers_id_custom_columns = async (
    base_url: string, 
    token: string, 
    path: {id: number}, 
    body: {CustomColumns: Array<{ColumnName: string, Value?: {}, }>, }, 
    axios: Function
): Promise<{data: put_customers_id_custom_columns_type}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Customers/${path.id}/CustomColumns`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type put_customers_id_addresses_type = any
export const put_customers_id_addresses = async (
    base_url: string, 
    token: string, 
    path: {id: number}, 
    body: {Addresses: Array<{ID: number, CompanyName?: string, AddressSource: number, AddressStatus: number, IsShippingAddress: boolean, IsBillingAddress: boolean, Address2?: string, ContactName?: string, Country: string, City: string, State?: string, Region?: string, ZipCode: string, Address: string, Phone?: string, Fax?: string, }>, }, 
    axios: Function
): Promise<{data: put_customers_id_addresses_type}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Customers/${path.id}/Addresses`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_customers_type = {Items?: Array<{UserID?: number, Email?: string, FirstName?: string, LastName?: string, EmailCC?: string, Rating?: number, CorporateName?: string, IsWholeSaleUser?: boolean, IsWholesaleString?: string, CustomColumns?: Array<{ID?: number, DataType?: number, DataLength?: number, IsDropDownColumn?: boolean, IsDropDownCustomTextAllowed?: boolean, IsDropDownAllowMultipleSelection?: boolean, ClientID?: number, NewValue?: {}, AllowHTMLPopup?: boolean, DataSourceContainer?: Array<{Key?: string, Value?: string, Additional?: {}, }>, IsRequired?: boolean, ColumnName?: string, DisplayName?: string, Value?: {}, }>, }>, TotalResults?: number, }
export const get_customers = async (
    base_url: string, 
    token: string,   
    query: {customerIds?: Array<string>,email?: string,firstName?: string,lastName?: string,rating?: number,customerType?: number,subscribed?: number,createdOnFrom?: string,createdOnTo?: string,modifiedOnFrom?: string,modifiedOnTo?: string,phoneNumber?: string,city?: string,zipCode?: string,exported?: number,channel?: number,corporateName?: string,companyIds?: Array<string>,keyword?: string,pageNumber?: number,pageSize?: number},
    axios: Function
): Promise<{data: get_customers_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Customers`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type post_customers_type = any
export const post_customers = async (
    base_url: string, 
    token: string,  
    body: {CompanyID?: number, FirstName: string, LastName?: string, Email?: string, BusinessName?: string, CustomerType?: number, }, 
    axios: Function
): Promise<{data: post_customers_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Customers`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_customers_id_type = {General?: undefined, Internal?: undefined, OrderOptions?: undefined, Personal?: undefined, Addresses?: Array<{ID?: number, CompanyName?: string, AddressSource?: number, AddressStatus?: number, IsShippingAddress?: boolean, IsBillingAddress?: boolean, Address2?: string, RowStatus?: number, ContactName?: string, Country?: string, City?: string, State?: string, Region?: string, ZipCode?: string, Address?: string, Phone?: string, Fax?: string, IsModified?: boolean, }>, WholesaleOptions?: undefined, CustomerGroups?: undefined, CreditCards?: Array<{ID?: number, CardType?: number, NameOnCard?: string, CardNumber?: string, ExpirationMonth?: number, ExpirationYear?: number, IsDefault?: boolean, CVV?: string, }>, CustomColumns?: Array<{ID?: number, DataType?: number, DataLength?: number, IsDropDownColumn?: boolean, IsDropDownCustomTextAllowed?: boolean, IsDropDownAllowMultipleSelection?: boolean, ClientID?: number, NewValue?: {}, AllowHTMLPopup?: boolean, DataSourceContainer?: Array<{Key?: string, Value?: string, Additional?: {}, }>, IsRequired?: boolean, ColumnName?: string, DisplayName?: string, Value?: {}, }>, NotesCount?: number, IsModified?: boolean, }
export const get_customers_id = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: get_customers_id_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Customers/${path.id}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type get_diagnostics_server_type = {LastCompileTime?: string, DbvsLocalVersion?: string, }
export const get_diagnostics_server = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: get_diagnostics_server_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Diagnostics/Server`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type get_diagnostics_tenant_type = {IsTerriformerServer?: boolean, Tenant?: string, }
export const get_diagnostics_tenant = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: get_diagnostics_tenant_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Diagnostics/Tenant`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type get_inventory_id_type = {General?: undefined, Identifiers?: undefined, Metrics?: undefined, Inventory?: undefined, Images?: Array<{ID?: number, ImageSource?: string, IsDefault?: boolean, }>, CustomColumns?: Array<{ID?: number, DataType?: number, DataLength?: number, IsDropDownColumn?: boolean, IsDropDownCustomTextAllowed?: boolean, IsDropDownAllowMultipleSelection?: boolean, ClientID?: number, NewValue?: {}, AllowHTMLPopup?: boolean, DataSourceContainer?: Array<{Key?: string, Value?: string, Additional?: {}, }>, IsRequired?: boolean, ColumnName?: string, DisplayName?: string, Value?: {}, }>, NotesCount?: number, IsModified?: boolean, }
export const get_inventory_id = async (
    base_url: string, 
    token: string, 
    path: {id: string},  
    axios: Function
): Promise<{data: get_inventory_id_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Inventory/${path.id}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type delete_inventory_id_type = any
export const delete_inventory_id = async (
    base_url: string, 
    token: string, 
    path: {id: string},  
    axios: Function
): Promise<{data: delete_inventory_id_type}> => {
    return axios({
        method: 'DELETE', 
        url: `${base_url}/api/Inventory/${path.id}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type get_inventory_details_type = {General?: undefined, Identifiers?: undefined, Metrics?: undefined, Inventory?: undefined, Images?: Array<{ID?: number, ImageSource?: string, IsDefault?: boolean, }>, CustomColumns?: Array<{ID?: number, DataType?: number, DataLength?: number, IsDropDownColumn?: boolean, IsDropDownCustomTextAllowed?: boolean, IsDropDownAllowMultipleSelection?: boolean, ClientID?: number, NewValue?: {}, AllowHTMLPopup?: boolean, DataSourceContainer?: Array<{Key?: string, Value?: string, Additional?: {}, }>, IsRequired?: boolean, ColumnName?: string, DisplayName?: string, Value?: {}, }>, NotesCount?: number, IsModified?: boolean, }
export const get_inventory_details = async (
    base_url: string, 
    token: string,   
    query: {productID: string},
    axios: Function
): Promise<{data: get_inventory_details_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Inventory/Details`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type get_inventory_type = {Items?: Array<{ImageUrl?: string, Weight?: string, ShippingWeight?: string, WeightOz?: number, PackageWeightLbs?: number, PackageWeightOz?: number, LocationNotes?: string, CompanyID?: number, ShadowOf?: string, AverageCost?: number, Priority?: number, Rating?: number, ProductName?: string, DefaultVendorSKU?: string, QtyPerCase?: number, QtySold15?: number, QtySold30?: number, QtySold60?: number, QtySold90?: number, QtySold180?: number, QtySold365?: number, QtySoldYTD?: number, IsEndOfLife?: boolean, ShippingCost?: number, AggregateQty?: number, ASIN?: string, AggregatePhysicalQtyFBA?: number, ASINInActiveListing?: string, ShippingWidth?: number, ShippingHeight?: number, ShippingLength?: number, LocationRegion?: number, WeightLbs?: number, ProductType?: string, DefaultVendor?: string, UnitOfMeasure?: number, HomeCountryCode?: number, Country?: string, AmazonMarketPlaceID?: string, CompanyName?: string, CompanyNameAbbreviation?: string, WarehouseBasedPhysicalAndReservedQty?: boolean, WarehousePhysicalQty?: number, WarehousePhysicalQtyValue?: number, WarehouseReservedQtyValue?: number, AggregatedQty?: number, AggregatePhysicalSellableQtyIncludingPhysicalValue?: number, PhysicalQty?: number, ReservedQty?: number, ReserveQtyTotalValue?: number, AggregateNonSellableQty?: number, StorePrice?: number, ManufacturerSKU?: string, UPC?: string, EAN?: string, AmazonFBASKU?: string, FulfilledBy?: string, SalesRank?: number, ProductConditionName?: string, NotesCount?: number, FirstKitChild?: string, WarehouseName?: string, IsSellAble?: boolean, WarehouseCount?: number, OrderReserveTotal?: number, ExpectedDeliveryDate?: string, CreationDate?: string, Status?: number, InventoryDependantOption?: number, OnOrder?: number, AmazonPrice?: number, VendorID?: number, LastAggregateDate?: string, LastModifiedDate?: string, AmazonMarketplace?: string, OnBackOrder?: number, BackOrderVisible?: boolean, WholeSalePrice?: number, WholeSalePriceVisible?: boolean, SitePrice?: number, SiteCost?: number, IsKit?: boolean, SiteCostVisible?: boolean, LastCost?: number, LastCostVisible?: boolean, ShowPriorityAndRatingDelta?: boolean, InventoryAvailableQty?: number, ChildProducts?: Array<{ProductId?: string, ChildProductId?: string, PerKitQty?: number, ProductName?: string, }>, CustomColumns?: Array<{ID?: number, DataType?: number, DataLength?: number, IsDropDownColumn?: boolean, IsDropDownCustomTextAllowed?: boolean, IsDropDownAllowMultipleSelection?: boolean, ClientID?: number, NewValue?: {}, AllowHTMLPopup?: boolean, DataSourceContainer?: Array<{Key?: string, Value?: string, Additional?: {}, }>, IsRequired?: boolean, ColumnName?: string, DisplayName?: string, Value?: {}, }>, AmazonStoreStatus?: boolean, AmazonEnableBOPISProduct?: boolean, ID?: string, }>, TotalResults?: number, }
export const get_inventory = async (
    base_url: string, 
    token: string,   
    query: {inventoryID?: string,eAN?: string,poID?: Array<number>,companyID?: Array<number>,vendorID?: Array<number>,defaultVendorID?: Array<number>,vendorSKU?: Array<string>,warehouse?: Array<number>,uPC?: string,physicalQtyFrom?: number,physicalQtyTo?: number,kitType?: number,lastAggregateFrom?: string,lastAggregateTo?: string,lastUpdatedFrom?: string,lastUpdatedTo?: string,keyword?: string,pageNumber?: number,pageSize?: number},
    axios: Function
): Promise<{data: get_inventory_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Inventory`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type put_inventory_type = any
export const put_inventory = async (
    base_url: string, 
    token: string,  
    body: {ID: string, ProductName?: string, CompanyID?: number, ProductTypeID?: number, Condition?: number, MasterSku?: string, UPC?: string, ShippingWeights?: undefined, ProductWeights?: undefined, ProductDimensions?: undefined, ShippingDimensions?: undefined, ShippingPackageTypeID?: number, LocationNotes?: string, QtyPerCase?: number, QtyPerPallet?: number, Replenishable?: boolean, }, 
    axios: Function
): Promise<{data: put_inventory_type}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Inventory`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type delete_inventory_type = any
export const delete_inventory = async (
    base_url: string, 
    token: string,   
    query: {productID: string},
    axios: Function
): Promise<{data: delete_inventory_type}> => {
    return axios({
        method: 'DELETE', 
        url: `${base_url}/api/Inventory`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type get_inventory_product_id_warehouses_warehouse_id_type = {ProductID?: string, AvailableQty?: number, PhysicalQty?: number, WarehouseID?: number, }
export const get_inventory_product_id_warehouses_warehouse_id = async (
    base_url: string, 
    token: string, 
    path: {productID: string,warehouseID: number},  
    axios: Function
): Promise<{data: get_inventory_product_id_warehouses_warehouse_id_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Inventory/${path.productID}/Warehouses/${path.warehouseID}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type get_inventory_product_id_warehouses_type = any
export const get_inventory_product_id_warehouses = async (
    base_url: string, 
    token: string, 
    path: {productID: string},  
    axios: Function
): Promise<{data: get_inventory_product_id_warehouses_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Inventory/${path.productID}/Warehouses`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type get_inventory_warehouses_type = any
export const get_inventory_warehouses = async (
    base_url: string, 
    token: string,   
    query: {productID: string,warehouseID?: number},
    axios: Function
): Promise<{data: get_inventory_warehouses_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Inventory/Warehouses`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type put_inventory_set_physical_inventory_type = any
export const put_inventory_set_physical_inventory = async (
    base_url: string, 
    token: string,  
    body: {WarehouseID?: number, ProductID: string, InventoryDate?: string, PhysicalQty: number, SiteCost?: number, PinCode?: string, }, 
    axios: Function
): Promise<{data: put_inventory_set_physical_inventory_type}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Inventory/SetPhysicalInventory`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type put_inventory_adjust_physical_inventory_type = any
export const put_inventory_adjust_physical_inventory = async (
    base_url: string, 
    token: string,  
    body: {WarehouseID?: number, ProductID: string, Qty?: number, AdjustmentType: number, Reason: string, InventoryCost?: number, SiteCost?: number, PinCode?: string, }, 
    axios: Function
): Promise<{data: put_inventory_adjust_physical_inventory_type}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Inventory/AdjustPhysicalInventory`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type put_inventory_import_physical_inventory_type = {QueuedJobLink?: string, ID?: number, Message?: string, }
export const put_inventory_import_physical_inventory = async (
    base_url: string, 
    token: string,  
    body: {UpdateType?: number, FileContent: string, InventoryDate: string, Format?: number, WarehouseID?: number, PinCode?: string, MergeDefaultWarehouseInventoryIntoShadowParent?: boolean, }, 
    axios: Function
): Promise<{data: put_inventory_import_physical_inventory_type}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Inventory/ImportPhysicalInventory`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type post_inventory_get_serial_numbers_type = {ProductID?: string, SerialNumbers?: Array<{SerialNumber?: string, PurchaseID?: number, OrderID?: number, OrderItemID?: number, CreditMemoID?: number, CreditMemoReason?: string, WarehouseID?: string, BinName?: string, FBAShipmentID?: number, WarehouseTransferRequestID?: number, ExpiryDate?: string, ReceivedOn?: string, }>, TotalSerialNumbers?: number, }
export const post_inventory_get_serial_numbers = async (
    base_url: string, 
    token: string,  
    body: {ProductID: string, SerialNumber?: string, WarehouseID?: number, InstockOnly?: boolean, ReceivedOnFromDate?: string, ReceivedOnToDate?: string, PageNumber?: number, PageSize?: number, }, 
    axios: Function
): Promise<{data: post_inventory_get_serial_numbers_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Inventory/GetSerialNumbers`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_inventory_import_download_inventory_template_type = any
export const get_inventory_import_download_inventory_template = async (
    base_url: string, 
    token: string,   
    query: {template: number,fileFormat: number},
    axios: Function
): Promise<{data: get_inventory_import_download_inventory_template_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Inventory/Import/DownloadInventoryTemplate`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type post_inventory_import_inventory_template_update_type_type = any
export const post_inventory_import_inventory_template_update_type = async (
    base_url: string, 
    token: string, 
    path: {updateType: number}, 
    body: {FileContents: string, InventoryDate: string, Format?: number, WarehouseID?: number, PinCode?: string, MergeDefaultWarehouseInventoryIntoShadowParent?: boolean, }, 
    axios: Function
): Promise<{data: post_inventory_import_inventory_template_update_type_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Inventory/Import/InventoryTemplate/${path.updateType}`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_orders_order_id_custom_columns_type = any
export const get_orders_order_id_custom_columns = async (
    base_url: string, 
    token: string, 
    path: {orderID: number},  
    axios: Function
): Promise<{data: get_orders_order_id_custom_columns_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Orders/${path.orderID}/CustomColumns`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type put_orders_order_id_custom_columns_type = any
export const put_orders_order_id_custom_columns = async (
    base_url: string, 
    token: string, 
    path: {orderID: number}, 
    body: {ColumnName: string, Value?: {}, }, 
    axios: Function
): Promise<{data: put_orders_order_id_custom_columns_type}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Orders/${path.orderID}/CustomColumns`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_orders_packages_type = {Results?: Array<{ID?: number, TrackingNumber?: string, TrackingNumberUrl?: string, TrackingNumberText?: string, Length?: number, Width?: number, Height?: number, Weight?: number, ShippingCost?: number, FinalShippingFee?: number, EstimatedDeliveryDate?: string, DeliveryDate?: string, DeliveryStatus?: number, DeclaredValue?: number, Items?: Array<{PackageID?: number, OrderItemID?: number, OrderItemBundleItemID?: number, ProductID?: string, Qty?: number, ItemName?: string, }>, EnableOrderShipmentTrackingAPI?: boolean, }>, TotalResults?: number, }
export const get_orders_packages = async (
    base_url: string, 
    token: string,   
    query: {id: number,pageNumber: number,pageSize: number},
    axios: Function
): Promise<{data: get_orders_packages_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Orders/Packages`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type get_orders_get_all_by_view_type = {Items?: Array<{ID?: number, OrderSourceOrderID?: string, OrderSource?: number, OrderSubType?: number, bRushOrder?: boolean, IsGiftOrder?: boolean, IsBlackListed?: boolean, ShippingStatus?: number, PaymentStatus?: number, StatusCode?: number, Dropship?: number, FirstName?: string, LastName?: string, TimeOfOrder?: string, GrandTotal?: number, CompanyName?: string, UserID?: number, ShipDate?: string, OrderShippingPromiseDate?: string, CreatedOn?: string, DeliveryDate?: string, HomeCountryCode?: number, Country?: string, LastUpdated?: string, Payments?: Array<{ID?: number, TransactionReferenceNumber?: string, PaidAmount?: number, PaymentDate?: string, PaymentType?: number, PaymentMethod?: number, PaymentStatus?: number, }>, DestinationState?: string, DestinationCountry?: string, ShippingAddress?: undefined, BillingAddress?: undefined, OrderSiteCode?: number, ClientID?: number, CompanyID?: number, EBaySellingManagerSalesRecordNumber?: string, CompletedOrderID?: string, OrderSourceUrl?: string, Items?: Array<{ID?: number, OrderID?: number, ProductID?: string, Qty?: number, DisplayName?: string, AdjustedSitePrice?: number, QtyReturned?: number, QtyShipped?: number, ID1?: number, OrderID1?: number, ProductID1?: string, Qty1?: number, DisplayName1?: string, OriginalBasePrice?: number, SitePrice?: number, AdjustedSitePrice1?: number, SiteCost?: number, TaxExempt?: number, TaxClass?: number, NonShipping?: number, ShipSeparately?: number, DropShipMode?: number, DropShipAddressID?: number, LineTotal?: number, LineTaxTotal?: number, StatusCode?: number, Weight?: number, Length?: number, Width?: number, Height?: number, MinimumQty?: number, DisplayDescription?: string, ImageURL?: string, ExtraInformation?: string, GiftWrap?: number, GiftWrapMessage?: string, GiftWrapAllowed?: number, InventoryKey?: string, ShippingCost?: number, QtyShipped1?: number, QtyReturned1?: number, ParentID?: number, ReferenceID?: string, eBayTransactionID?: string, OriginalOrderSourceID?: string, PostingFee?: number, FinalValueFee?: number, IsBackOrder?: boolean, BackOrderAction?: number, BackOrderActionDate?: string, BackOrderActionBy?: number, EstimatedTimeArrival?: string, ReplacementSKU?: string, ListingError?: number, FeedBackID?: string, FeedBackReminderSent?: string, BackOrderQty?: number, BackOrderDate?: string, BackOrderBy?: number, EstimatedShipDate?: string, NotifyCustomerService?: boolean, NotifyCustomer?: string, DisputeID?: string, OriginalSKU?: string, IsSKUReplaced?: boolean, InsuranceCost?: number, FeedbackLeft?: boolean, FeedbackLeftOn?: string, FeedBackLeftID?: string, IsDropShipped?: boolean, DropShippedOn?: string, DropShippedToVendor?: number, Notes?: string, ProductIDOriginal?: string, SalesRepId?: number, ShipFromWareHouseID?: number, ShipFromWarehouseName?: string, FeedBackFailureCount?: number, FeedBackLastFailureOn?: string, FeedBackFailureMessage?: string, SourceOrderFileName?: string, eBayItemIDUnique?: string, eBayTransactionIDUnique?: string, DontCountInventory?: boolean, ShippingTax?: number, GiftWrapTax?: number, DropShippedVendorOrderID?: string, GiftWrapType?: string, GiftWrapCharges?: number, ShippingCostForAccounting?: number, ReturnedToWarehouseID?: number, AverageCost?: number, LastCost?: number, CreditMemoID?: number, CreditMemoItemID?: number, HasBuyDotCoupon?: boolean, BuyDotCouponAmount?: number, DiscountType?: number, DiscountAmount?: number, DiscountTotal?: number, QtyRequestedByOrderSource?: number, ProductRebateID?: number, ProductRebateValue?: number, Purchaser?: number, ShippingSourceOrderItemID?: string, SalesOutlet?: string, VariantID?: number, ShippingSourceWarehouseID?: string, ExportedProductID?: string, ExportedDocumentNumber?: string, BatchExportedGUID?: string, DeliveryDocumentNumber?: string, BatchExportDeliveryGUID?: string, SrcUpdatedForItemShipping?: boolean, SrcUpdatedForItemShippingOn?: string, ShipType?: string, DropShippedStatus?: number, BatchExportedJobID?: number, BatchExportedDateTime?: string, ItemStatusCode?: number, ItemPaymentStatus?: number, ItemShippingStatus?: number, BatchExportDeliveryJobID?: number, BatchExportDeliveryDateTime?: string, CancellationRequestSentToInnotrac?: boolean, ShippingSourceCancellationQty?: number, TotalRefunded?: number, ReturnDocumentNumber?: string, BatchExportReturnGUID?: string, BatchExportReturnJobID?: number, BatchExportReturnDateTime?: string, ProfitAndLossAdjustmentTotal?: number, SalesRecordNumber?: string, ShippingSourceOrderItemSKU?: string, QtyPerCase?: number, TotalCases?: number, PricePerCase?: number, QtyPicked?: number, ProductIDRequested?: string, WholesaleConfirmedQty?: number, WholesaleConfirmShipDate?: string, WholesaleBackOrderQty?: number, WholesaleBackOrderShipDate?: string, WholesaleRefuseQty?: number, KitItemsCount?: number, VatRate?: number, VATTotal?: number, AmazonShipmentID?: string, WarehouseBinCartSlotID?: number, SettlementID?: number, RoundNumber?: number, WarehouseBinCartID?: number, MainItemID?: string, LinkedToPOItemID?: number, OrderItemShipDate?: string, ProductName?: string, InventoryAvailableQty?: number, LocationNotes?: string, ShadowOf?: string, DefaultVendorName?: string, BundleItems?: Array<{ID?: number, ParentID?: number, OrderItemId?: number, OrderID?: number, ProductID?: string, Qty?: number, QtyReturned?: number, IsPackageGenerated?: boolean, IsBackOrder?: boolean, BackOrderAction?: number, BackOrderActionDate?: string, BackOrderActionBy?: number, BackOrderQty?: number, BackOrderDate?: string, BackOrderBy?: number, TotalQty?: number, ReturnedToWarehouseID?: number, SiteCost?: number, LastCost?: number, AverageCost?: number, ProductRebateID?: number, ProductRebateValue?: number, ShippingSourceOrderItemID?: string, ShippingSourceWarehouseID?: string, QtyPicked?: number, ReplacementSKU?: string, IsSKUReplaced?: boolean, WarehouseBinCartSlotID?: number, RoundNumber?: number, WarehouseBinCartID?: number, LinkedToPOItemID?: number, ProductName?: string, }>, }>, ShippingTotal?: number, ShippingCarrier?: string, ShippingService?: string, OrderDiscountsTotal?: number, ShippingDiscountsTotal?: number, InsuranceTotal?: number, DeclaredValue?: number, HandlingFee?: number, PaymentDate?: string, OrderCurrencyCode?: number, TrackingNumber?: string, AllTrackingNumbers?: Array<string>, InvoicePrinted?: boolean, InvoicePrintedDate?: string, CustomerServiceStatus?: number, TaxRate?: number, TaxTotal?: number, ShippingWeightTotalOz?: number, CustomerEmail?: string, ShippingState?: string, ShippingCountry?: string, FinalShippingFee?: number, FinalValueTotal?: number, ProductIDMostExpensiveInOrder?: string, EstimatedDeliveryDate?: string, RequireSignatureConfirmation?: boolean, RelatedOrders?: Array<{RelatedOrderID?: number, RelationshipType?: number, CreatedOn?: string, }>, }>, TotalResults?: number, }
export const get_orders_get_all_by_view = async (
    base_url: string, 
    token: string,   
    query: {viewID: number,pageNumber: number,pageSize: number},
    axios: Function
): Promise<{data: get_orders_get_all_by_view_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Orders/GetAllByView`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type get_orders_way_to_pay_link_type = {OrderID?: number, TinyUrl?: string, Error?: string, }
export const get_orders_way_to_pay_link = async (
    base_url: string, 
    token: string,   
    query: {id: number},
    axios: Function
): Promise<{data: get_orders_way_to_pay_link_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Orders/WayToPayLink`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type put_orders_shipping_status_type = any
export const put_orders_shipping_status = async (
    base_url: string, 
    token: string,  
    body: {OrderID?: number, ShippingCarrier: string, ShippingService: string, ShipFromWarehouseID?: number, DeclaredValue?: number, ShipDate?: string, TrackingNumber?: string, ShippingCost?: number, Width?: number, Height?: number, Length?: number, Weight?: number, }, 
    axios: Function
): Promise<{data: put_orders_shipping_status_type}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Orders/ShippingStatus`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_orders_serials_type = any
export const get_orders_serials = async (
    base_url: string, 
    token: string,   
    query: {id: number},
    axios: Function
): Promise<{data: get_orders_serials_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Orders/Serials`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type put_orders_serials_type = any
export const put_orders_serials = async (
    base_url: string, 
    token: string,  
    body: {Items?: Array<{OrderID?: number, ProductID?: string, SerialNumber?: string, OrderItemID?: number, KitItemID?: number, }>, }, 
    axios: Function
): Promise<{data: put_orders_serials_type}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Orders/Serials`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_orders_notes_type = any
export const get_orders_notes = async (
    base_url: string, 
    token: string,   
    query: {id: number},
    axios: Function
): Promise<{data: get_orders_notes_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Orders/Notes`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type post_orders_order_id_notes_type = any
export const post_orders_order_id_notes = async (
    base_url: string, 
    token: string, 
    path: {orderID: number}, 
    body: {Message?: string, Category?: number, }, 
    axios: Function
): Promise<{data: post_orders_order_id_notes_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Orders/${path.orderID}/Notes`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_orders_custom_columns_type = any
export const get_orders_custom_columns = async (
    base_url: string, 
    token: string,   
    query: {id: number},
    axios: Function
): Promise<{data: get_orders_custom_columns_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Orders/CustomColumns`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type post_orders_get_custom_columns_type = any
export const post_orders_get_custom_columns = async (
    base_url: string, 
    token: string,  
    body: {OrderIDs?: Array<number>, }, 
    axios: Function
): Promise<{data: post_orders_get_custom_columns_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Orders/GetCustomColumns`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type put_orders_shipping_status_single_package_type = any
export const put_orders_shipping_status_single_package = async (
    base_url: string, 
    token: string,  
    body: {OrderID?: number, ShipDate?: string, TrackingNumber?: string, ShippingCost?: number, PackageID?: number, CarrierName?: string, ShippingMethod?: string, WarehouseID?: number, Length?: number, Width?: number, Height?: number, Weight?: number, }, 
    axios: Function
): Promise<{data: put_orders_shipping_status_single_package_type}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Orders/ShippingStatus/SinglePackage`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type put_orders_set_unshipped_type = any
export const put_orders_set_unshipped = async (
    base_url: string, 
    token: string,  
    body: {Orders: Array<number>, PIN?: string, }, 
    axios: Function
): Promise<{data: put_orders_set_unshipped_type}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Orders/SetUnshipped`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type put_orders_set_exported_type = any
export const put_orders_set_exported = async (
    base_url: string, 
    token: string,  
    body: {Orders: Array<number>, Exported: boolean, }, 
    axios: Function
): Promise<{data: put_orders_set_exported_type}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Orders/SetExported`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type put_orders_set_quick_book_status_type = any
export const put_orders_set_quick_book_status = async (
    base_url: string, 
    token: string,  
    body: {OrderIDs?: Array<number>, Exported?: boolean, }, 
    axios: Function
): Promise<{data: put_orders_set_quick_book_status_type}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Orders/SetQuickBookStatus`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type put_orders_status_code_type = any
export const put_orders_status_code = async (
    base_url: string, 
    token: string,  
    body: {Orders: Array<number>, Status: number, }, 
    axios: Function
): Promise<{data: put_orders_status_code_type}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Orders/StatusCode`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type put_orders_mark_ready_for_pickup_type = any
export const put_orders_mark_ready_for_pickup = async (
    base_url: string, 
    token: string,  
    body: {Orders: Array<number>, }, 
    axios: Function
): Promise<{data: put_orders_mark_ready_for_pickup_type}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Orders/MarkReadyForPickup`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type put_orders_mark_picked_up_type = any
export const put_orders_mark_picked_up = async (
    base_url: string, 
    token: string,  
    body: {Orders: Array<number>, }, 
    axios: Function
): Promise<{data: put_orders_mark_picked_up_type}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Orders/MarkPickedUp`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_orders_id_picklist_ids_type = any
export const get_orders_id_picklist_ids = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: get_orders_id_picklist_ids_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Orders/${path.id}/PicklistIDs`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type put_orders_dropship_status_type = any
export const put_orders_dropship_status = async (
    base_url: string, 
    token: string,  
    body: {Orders: Array<number>, DropshipStatus: number, }, 
    axios: Function
): Promise<{data: put_orders_dropship_status_type}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Orders/DropshipStatus`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type post_orders_id_upload_document_type = any
export const post_orders_id_upload_document = async (
    base_url: string, 
    token: string, 
    path: {id: number}, 
    body: {FileContent: string, FileName: string, }, 
    axios: Function
): Promise<{data: post_orders_id_upload_document_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Orders/${path.id}/UploadDocument`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_orders_check_splitted_status_type = {IsSplitted?: boolean, IsChildOrder?: boolean, ChildOrderIDs?: Array<number>, ParrentOrderID?: number, }
export const get_orders_check_splitted_status = async (
    base_url: string, 
    token: string,   
    query: {orderID: number},
    axios: Function
): Promise<{data: get_orders_check_splitted_status_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Orders/CheckSplittedStatus`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type get_orders_views_type = any
export const get_orders_views = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: get_orders_views_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Orders/Views`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type post_orders_profit_and_loss_type = any
export const post_orders_profit_and_loss = async (
    base_url: string, 
    token: string,  
    body: {Orders?: Array<number>, }, 
    axios: Function
): Promise<{data: post_orders_profit_and_loss_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Orders/ProfitAndLoss`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type put_orders_order_id_items_type = any
export const put_orders_order_id_items = async (
    base_url: string, 
    token: string, 
    path: {orderID: number}, 
    body: {OrderItemID: number, ProductID?: string, ProductName?: string, SitePrice?: number, DiscountValue?: number, DiscountType?: number, Qty?: number, WarehouseID?: number, Notes?: string, }, 
    axios: Function
): Promise<{data: put_orders_order_id_items_type}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Orders/${path.orderID}/items`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type post_orders_order_id_items_type = any
export const post_orders_order_id_items = async (
    base_url: string, 
    token: string, 
    path: {orderID: number}, 
    body: {ProductID: string, ProductName?: string, SitePrice?: number, DiscountValue?: number, DiscountType?: number, Qty: number, LineTaxTotal?: number, FinalValueFee?: number, ReferenceID?: string, Notes?: string, }, 
    axios: Function
): Promise<{data: post_orders_order_id_items_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Orders/${path.orderID}/items`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type delete_orders_order_id_items_type = any
export const delete_orders_order_id_items = async (
    base_url: string, 
    token: string, 
    path: {orderID: number}, 
    body: undefined, 
    axios: Function
): Promise<{data: delete_orders_order_id_items_type}> => {
    return axios({
        method: 'DELETE', 
        url: `${base_url}/api/Orders/${path.orderID}/items`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type post_orders_print_pdf_invoice_type = {FileName?: string, Content?: string, }
export const post_orders_print_pdf_invoice = async (
    base_url: string, 
    token: string,  
    body: {OrderIDs?: Array<number>, }, 
    axios: Function
): Promise<{data: post_orders_print_pdf_invoice_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Orders/PrintPdfInvoice`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type post_orders_replacement_order_type = {ReplacementOrderID?: number, }
export const post_orders_replacement_order = async (
    base_url: string, 
    token: string,  
    body: {OrderID: number, ReasonID: number, AdditionalNote?: string, DisableInventoryCount?: boolean, SecurityPin?: string, }, 
    axios: Function
): Promise<{data: post_orders_replacement_order_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Orders/ReplacementOrder`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_orders_replacement_order_reasons_type = any
export const get_orders_replacement_order_reasons = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: get_orders_replacement_order_reasons_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Orders/ReplacementOrder/Reasons`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type get_orders_id_type = {OrderID?: number, OrderDetails?: undefined, Statuses?: undefined, OrderItems?: Array<{ID?: number, OrderID?: number, ProductID: string, _ProductIDInitial?: string, ProductIDOriginal?: string, ProductIDRequested?: string, ItemProductIdExists?: boolean, DisplayName: string, DisplayDescription?: string, ImageURL?: string, Qty?: number, TaxExempt?: boolean, SitePrice?: number, PricePerCase?: number, TotalCases?: number, QtyPerCase?: number, EBayItemID?: string, EBayItemUrl?: string, InventoryAvailableQty?: number, WarehouseID?: number, BundleItems?: Array<{ProductID?: string, ImageURL?: string, ProductName?: string, QtyPerKit?: number, TotalQty?: number, BackOrderQty?: number, Picked?: number, }>, BackOrderQty?: number, QtyReturned?: number, QtyPicked?: number, Notes?: string, LineTotal?: number, DiscountValue?: number, DiscountType?: number, CanBeDeleted?: boolean, AdjustedSitePrice?: number, ShadowOf?: string, LineTaxTotal?: number, ShippingCost?: number, ShippingTax?: number, RowStatus?: number, IsModified?: boolean, }>, RelatedOrders?: Array<{RelatedOrderID?: number, RelationshipType?: number, CreatedOn?: string, }>, TotalInfo?: undefined, PaymentOptions?: undefined, ShippingDetails?: undefined, OrderPackages?: Array<{ID?: number, TrackingNumber?: string, TrackingNumberUrl?: string, TrackingNumberText?: string, Length?: number, Width?: number, Height?: number, Weight?: number, ShippingCost?: number, FinalShippingFee?: number, EstimatedDeliveryDate?: string, DeliveryDate?: string, DeliveryStatus?: number, DeclaredValue?: number, Items?: Array<{PackageID?: number, OrderItemID?: number, OrderItemBundleItemID?: number, ProductID?: string, Qty?: number, ItemName?: string, }>, EnableOrderShipmentTrackingAPI?: boolean, }>, LastUpdated?: string, OrderSiteCode?: string, OrderItemDiscountAllowed?: boolean, EnableCaseQty?: boolean, ShowProductImageOnOrderDetailPage?: boolean, HideBackOrdersColumnInManageOrders?: boolean, DisplayLocationNotesOnOrderItemsGrid?: boolean, EnableWarehouseBins?: boolean, EnableSecondSalesRep?: boolean, RmaID?: number, IsWholeSaleOrder?: boolean, MostExpensiveSKU?: string, RequirePinToSetCancelledOrdersToInProcess?: boolean, ForceEnterCommentsWhenSettingOrderToOnHoldOrProblem?: boolean, ShippingAddress?: undefined, BillingAddress?: undefined, StoreType?: number, Payments?: Array<{ID?: number, TransactionReferenceNumber?: string, PaidAmount?: number, PaymentDate?: string, PaymentType?: number, PaymentMethod?: number, PaymentStatus?: number, }>, ProfitAndLoss?: undefined, CustomColumns?: Array<{ColumnName?: string, DisplayName?: string, Value?: {}, }>, GiftDetails?: undefined, RequireSignatureConfirmation?: boolean, }
export const get_orders_id = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: get_orders_id_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Orders/${path.id}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type put_orders_id_type = any
export const put_orders_id = async (
    base_url: string, 
    token: string, 
    path: {id: number}, 
    body: {CompanyId?: number, CustomerId?: number, OrderSource?: number, OrderSubType?: number, SalesRep1?: number, CurrencyCode?: number, DisableInventoryCount?: boolean, ShippingAddress?: undefined, BillingAddress?: undefined, }, 
    axios: Function
): Promise<{data: put_orders_id_type}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Orders/${path.id}`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type delete_orders_id_type = any
export const delete_orders_id = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: delete_orders_id_type}> => {
    return axios({
        method: 'DELETE', 
        url: `${base_url}/api/Orders/${path.id}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type get_orders_type = {Items?: Array<{ID?: number, OrderSourceOrderID?: string, OrderSource?: number, OrderSubType?: number, bRushOrder?: boolean, IsGiftOrder?: boolean, IsBlackListed?: boolean, ShippingStatus?: number, PaymentStatus?: number, StatusCode?: number, Dropship?: number, FirstName?: string, LastName?: string, TimeOfOrder?: string, GrandTotal?: number, CompanyName?: string, UserID?: number, ShipDate?: string, OrderShippingPromiseDate?: string, CreatedOn?: string, DeliveryDate?: string, HomeCountryCode?: number, Country?: string, LastUpdated?: string, Payments?: Array<{ID?: number, TransactionReferenceNumber?: string, PaidAmount?: number, PaymentDate?: string, PaymentType?: number, PaymentMethod?: number, PaymentStatus?: number, }>, DestinationState?: string, DestinationCountry?: string, ShippingAddress?: undefined, BillingAddress?: undefined, OrderSiteCode?: number, ClientID?: number, CompanyID?: number, EBaySellingManagerSalesRecordNumber?: string, CompletedOrderID?: string, OrderSourceUrl?: string, Items?: Array<{ID?: number, OrderID?: number, ProductID?: string, Qty?: number, DisplayName?: string, AdjustedSitePrice?: number, QtyReturned?: number, QtyShipped?: number, ID1?: number, OrderID1?: number, ProductID1?: string, Qty1?: number, DisplayName1?: string, OriginalBasePrice?: number, SitePrice?: number, AdjustedSitePrice1?: number, SiteCost?: number, TaxExempt?: number, TaxClass?: number, NonShipping?: number, ShipSeparately?: number, DropShipMode?: number, DropShipAddressID?: number, LineTotal?: number, LineTaxTotal?: number, StatusCode?: number, Weight?: number, Length?: number, Width?: number, Height?: number, MinimumQty?: number, DisplayDescription?: string, ImageURL?: string, ExtraInformation?: string, GiftWrap?: number, GiftWrapMessage?: string, GiftWrapAllowed?: number, InventoryKey?: string, ShippingCost?: number, QtyShipped1?: number, QtyReturned1?: number, ParentID?: number, ReferenceID?: string, eBayTransactionID?: string, OriginalOrderSourceID?: string, PostingFee?: number, FinalValueFee?: number, IsBackOrder?: boolean, BackOrderAction?: number, BackOrderActionDate?: string, BackOrderActionBy?: number, EstimatedTimeArrival?: string, ReplacementSKU?: string, ListingError?: number, FeedBackID?: string, FeedBackReminderSent?: string, BackOrderQty?: number, BackOrderDate?: string, BackOrderBy?: number, EstimatedShipDate?: string, NotifyCustomerService?: boolean, NotifyCustomer?: string, DisputeID?: string, OriginalSKU?: string, IsSKUReplaced?: boolean, InsuranceCost?: number, FeedbackLeft?: boolean, FeedbackLeftOn?: string, FeedBackLeftID?: string, IsDropShipped?: boolean, DropShippedOn?: string, DropShippedToVendor?: number, Notes?: string, ProductIDOriginal?: string, SalesRepId?: number, ShipFromWareHouseID?: number, ShipFromWarehouseName?: string, FeedBackFailureCount?: number, FeedBackLastFailureOn?: string, FeedBackFailureMessage?: string, SourceOrderFileName?: string, eBayItemIDUnique?: string, eBayTransactionIDUnique?: string, DontCountInventory?: boolean, ShippingTax?: number, GiftWrapTax?: number, DropShippedVendorOrderID?: string, GiftWrapType?: string, GiftWrapCharges?: number, ShippingCostForAccounting?: number, ReturnedToWarehouseID?: number, AverageCost?: number, LastCost?: number, CreditMemoID?: number, CreditMemoItemID?: number, HasBuyDotCoupon?: boolean, BuyDotCouponAmount?: number, DiscountType?: number, DiscountAmount?: number, DiscountTotal?: number, QtyRequestedByOrderSource?: number, ProductRebateID?: number, ProductRebateValue?: number, Purchaser?: number, ShippingSourceOrderItemID?: string, SalesOutlet?: string, VariantID?: number, ShippingSourceWarehouseID?: string, ExportedProductID?: string, ExportedDocumentNumber?: string, BatchExportedGUID?: string, DeliveryDocumentNumber?: string, BatchExportDeliveryGUID?: string, SrcUpdatedForItemShipping?: boolean, SrcUpdatedForItemShippingOn?: string, ShipType?: string, DropShippedStatus?: number, BatchExportedJobID?: number, BatchExportedDateTime?: string, ItemStatusCode?: number, ItemPaymentStatus?: number, ItemShippingStatus?: number, BatchExportDeliveryJobID?: number, BatchExportDeliveryDateTime?: string, CancellationRequestSentToInnotrac?: boolean, ShippingSourceCancellationQty?: number, TotalRefunded?: number, ReturnDocumentNumber?: string, BatchExportReturnGUID?: string, BatchExportReturnJobID?: number, BatchExportReturnDateTime?: string, ProfitAndLossAdjustmentTotal?: number, SalesRecordNumber?: string, ShippingSourceOrderItemSKU?: string, QtyPerCase?: number, TotalCases?: number, PricePerCase?: number, QtyPicked?: number, ProductIDRequested?: string, WholesaleConfirmedQty?: number, WholesaleConfirmShipDate?: string, WholesaleBackOrderQty?: number, WholesaleBackOrderShipDate?: string, WholesaleRefuseQty?: number, KitItemsCount?: number, VatRate?: number, VATTotal?: number, AmazonShipmentID?: string, WarehouseBinCartSlotID?: number, SettlementID?: number, RoundNumber?: number, WarehouseBinCartID?: number, MainItemID?: string, LinkedToPOItemID?: number, OrderItemShipDate?: string, ProductName?: string, InventoryAvailableQty?: number, LocationNotes?: string, ShadowOf?: string, DefaultVendorName?: string, BundleItems?: Array<{ID?: number, ParentID?: number, OrderItemId?: number, OrderID?: number, ProductID?: string, Qty?: number, QtyReturned?: number, IsPackageGenerated?: boolean, IsBackOrder?: boolean, BackOrderAction?: number, BackOrderActionDate?: string, BackOrderActionBy?: number, BackOrderQty?: number, BackOrderDate?: string, BackOrderBy?: number, TotalQty?: number, ReturnedToWarehouseID?: number, SiteCost?: number, LastCost?: number, AverageCost?: number, ProductRebateID?: number, ProductRebateValue?: number, ShippingSourceOrderItemID?: string, ShippingSourceWarehouseID?: string, QtyPicked?: number, ReplacementSKU?: string, IsSKUReplaced?: boolean, WarehouseBinCartSlotID?: number, RoundNumber?: number, WarehouseBinCartID?: number, LinkedToPOItemID?: number, ProductName?: string, }>, }>, ShippingTotal?: number, ShippingCarrier?: string, ShippingService?: string, OrderDiscountsTotal?: number, ShippingDiscountsTotal?: number, InsuranceTotal?: number, DeclaredValue?: number, HandlingFee?: number, PaymentDate?: string, OrderCurrencyCode?: number, TrackingNumber?: string, AllTrackingNumbers?: Array<string>, InvoicePrinted?: boolean, InvoicePrintedDate?: string, CustomerServiceStatus?: number, TaxRate?: number, TaxTotal?: number, ShippingWeightTotalOz?: number, CustomerEmail?: string, ShippingState?: string, ShippingCountry?: string, FinalShippingFee?: number, FinalValueTotal?: number, ProductIDMostExpensiveInOrder?: string, EstimatedDeliveryDate?: string, RequireSignatureConfirmation?: boolean, RelatedOrders?: Array<{RelatedOrderID?: number, RelationshipType?: number, CreatedOn?: string, }>, }>, TotalResults?: number, }
export const get_orders = async (
    base_url: string, 
    token: string,   
    query: {orderIDs?: Array<number>,companyID?: Array<number>,companyGroupID?: Array<number>,orderStatus?: Array<number>,dateRange?: number,shipDateRange?: number,updatedFromDateRange?: number,createdOnDateRange?: number,shippingStatus?: number,trackingNumber?: string,serialNumber?: string,paymentDateRange?: number,sKU?: string,aSIN?: string,createdOnFrom?: string,createdOnTo?: string,lastUpdatedFrom?: string,lastUpdatedTo?: string,channel?: number,orderSubType?: number,orderSourceOrderIDList?: Array<string>,qBExported?: number,paymentStatus?: number,dropShipStatus?: number,warehouseID?: Array<number>,userID?: number,shipFromDate?: string,shipToDate?: string,orderFromDate?: string,orderToDate?: string,orderBy?: number,isAscending?: boolean,keyword?: string,picklistID?: string,replacementOrder?: number,pageNumber?: number,pageSize?: number},
    axios: Function
): Promise<{data: get_orders_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Orders`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type post_orders_type = any
export const post_orders = async (
    base_url: string, 
    token: string,  
    body: {ID?: number, CustomerDetails: undefined, OrderDetails: undefined, GiftDetails?: undefined, Products?: Array<{ProductID?: string, ReferenceID?: string, ProductName?: string, SitePrice?: number, DiscountValue?: number, DiscountType?: number, Qty?: number, LineTaxTotal?: number, FinalValueFee?: number, Notes?: string, }>, ShippingAddress: undefined, BillingAddress: undefined, ShippingMethodDetails?: undefined, Notes?: Array<{EntityID?: number, Category?: number, NoteID?: number, Note?: string, AuditDate?: string, CreatedBy?: number, CreatedByName?: string, CreatedByEmail?: string, }>, }, 
    axios: Function
): Promise<{data: post_orders_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Orders`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type put_orders_order_id_receive_manual_payment_type = any
export const put_orders_order_id_receive_manual_payment = async (
    base_url: string, 
    token: string, 
    path: {orderID: number}, 
    body: {Amount?: number, Notes?: string, PaymentMethod: number, ReferenceNumber?: string, }, 
    axios: Function
): Promise<{data: put_orders_order_id_receive_manual_payment_type}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Orders/${path.orderID}/ReceiveManualPayment`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type put_orders_order_id_receive_check_type = any
export const put_orders_order_id_receive_check = async (
    base_url: string, 
    token: string, 
    path: {orderID: number}, 
    body: {Amount?: number, Notes?: string, CheckNumber: string, }, 
    axios: Function
): Promise<{data: put_orders_order_id_receive_check_type}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Orders/${path.orderID}/ReceiveCheck`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type post_picklists_type = {QueuedJobId?: number, }
export const post_picklists = async (
    base_url: string, 
    token: string,  
    body: {Title: string, WarehouseId: number, Orders: Array<number>, }, 
    axios: Function
): Promise<{data: post_picklists_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Picklists`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_picklists_id_order_ids_type = any
export const get_picklists_id_order_ids = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: get_picklists_id_order_ids_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Picklists/${path.id}/OrderIDs`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type get_picklists_products_type = {Results?: Array<{ID?: number, ProductID?: string, ProductName?: string, Qty?: number, QtyPicked?: number, QtySorted?: number, QtyShipped?: number, Location?: string, Package?: string, InventoryAvailableQty?: number, ReplacementCount?: number, ReplacementSKU?: string, ReplacementLOC?: string, UPC?: string, Purchaser?: string, ProductWeight?: number, OrderIdList?: string, }>, TotalResults?: number, }
export const get_picklists_products = async (
    base_url: string, 
    token: string,   
    query: {picklistID: number,pageNumber: number,pageSize: number},
    axios: Function
): Promise<{data: get_picklists_products_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Picklists/Products`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type get_product_conditions_type = any
export const get_product_conditions = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: get_product_conditions_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/ProductConditions`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type get_product_conditions_id_type = {ConditionNote?: string, NewEggDotComConditionID?: number, SearsCondition?: number, BuyDotComConditionID?: number, eBayConditionID?: number, ClientID?: number, AmazonConditionID?: number, SortOrder?: number, ID?: number, ConditionName?: string, ReverbCondition?: number, }
export const get_product_conditions_id = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: get_product_conditions_id_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/ProductConditions/${path.id}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type get_product_image_type = any
export const get_product_image = async (
    base_url: string, 
    token: string,   
    query: {productID: string},
    axios: Function
): Promise<{data: get_product_image_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/ProductImage`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type post_product_image_type = any
export const post_product_image = async (
    base_url: string, 
    token: string,  
    body: {ProductID?: string, Content?: string, FileName?: string, Caption?: string, Properties?: undefined, }, 
    axios: Function
): Promise<{data: post_product_image_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/ProductImage`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_product_image_id_type = any
export const get_product_image_id = async (
    base_url: string, 
    token: string, 
    path: {id: string},  
    axios: Function
): Promise<{data: get_product_image_id_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/ProductImage/${path.id}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type delete_product_image_id_type = any
export const delete_product_image_id = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: delete_product_image_id_type}> => {
    return axios({
        method: 'DELETE', 
        url: `${base_url}/api/ProductImage/${path.id}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type post_product_image_get_products_images_type = any
export const post_product_image_get_products_images = async (
    base_url: string, 
    token: string,  
    body: {ProductsIDs?: Array<string>, }, 
    axios: Function
): Promise<{data: post_product_image_get_products_images_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/ProductImage/GetProductsImages`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type post_products_type = any
export const post_products = async (
    base_url: string, 
    token: string,  
    body: {CompanyId?: number, ProductName: string, ProductSKU: string, ProductTypeName: string, PurchaserId?: number, SiteCost?: number, DefaultPrice?: number, ManufacturerId?: number, AutoAssignUPC?: boolean, UPC?: string, ProductNotes?: string, }, 
    axios: Function
): Promise<{data: post_products_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Products`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_products_id_custom_columns_type = any
export const get_products_id_custom_columns = async (
    base_url: string, 
    token: string, 
    path: {id: string},  
    axios: Function
): Promise<{data: get_products_id_custom_columns_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Products/${path.id}/CustomColumns`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type put_products_id_custom_columns_type = any
export const put_products_id_custom_columns = async (
    base_url: string, 
    token: string, 
    path: {id: string}, 
    body: {ColumnName: string, Value?: {}, }, 
    axios: Function
): Promise<{data: put_products_id_custom_columns_type}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Products/${path.id}/CustomColumns`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_products_custom_columns_type = any
export const get_products_custom_columns = async (
    base_url: string, 
    token: string,   
    query: {productID: string},
    axios: Function
): Promise<{data: get_products_custom_columns_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Products/CustomColumns`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type put_products_custom_columns_type = any
export const put_products_custom_columns = async (
    base_url: string, 
    token: string,  
    body: {ProductID: string, CustomColumns?: Array<{ColumnName: string, Value?: {}, }>, }, 
    axios: Function
): Promise<{data: put_products_custom_columns_type}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Products/CustomColumns`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type put_products_id_custom_columns_multiple_type = any
export const put_products_id_custom_columns_multiple = async (
    base_url: string, 
    token: string, 
    path: {id: string}, 
    body: {ColumnName: string, Value?: {}, }, 
    axios: Function
): Promise<{data: put_products_id_custom_columns_multiple_type}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Products/${path.id}/CustomColumnsMultiple`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_purchase_orders_id_items_type = {PoCaseQtyEnabled?: boolean, Items?: Array<{ID?: number, ProductID?: string, ProductName?: string, QtyUnitsOrdered?: number, UnitPrice?: number, QtyCasesOrdered?: number, QtyUnitsPerCase?: number, CasePrice?: number, DiscountType?: number, DiscountValue?: number, ExpectedDeliveryDate?: string, }>, }
export const get_purchase_orders_id_items = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: get_purchase_orders_id_items_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/PurchaseOrders/${path.id}/Items`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type put_purchase_orders_id_items_type = any
export const put_purchase_orders_id_items = async (
    base_url: string, 
    token: string, 
    path: {id: number}, 
    body: {Items: Array<{ID: number, QtyUnitsOrdered?: number, UnitPrice?: number, QtyCasesOrdered?: number, QtyUnitsPerCase?: number, CasePrice?: number, ExpectedDeliveryDate?: string, }>, }, 
    axios: Function
): Promise<{data: put_purchase_orders_id_items_type}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/PurchaseOrders/${path.id}/Items`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type post_purchase_orders_id_items_type = any
export const post_purchase_orders_id_items = async (
    base_url: string, 
    token: string, 
    path: {id: number}, 
    body: {ProductID: string, QtyUnitsOrdered?: number, UnitPrice?: number, QtyCasesOrdered?: number, QtyUnitsPerCase?: number, CasePrice?: number, DiscountType?: number, DiscountValue?: number, WarehouseID?: number, ItemNotes?: string, }, 
    axios: Function
): Promise<{data: post_purchase_orders_id_items_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/PurchaseOrders/${path.id}/items`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type post_purchase_orders_id_receive_type = any
export const post_purchase_orders_id_receive = async (
    base_url: string, 
    token: string, 
    path: {id: number}, 
    body: {ReceiveInvoiceNumber?: string, VendorOrderId?: string, ShippingCost?: number, Items: Array<{ID: number, QtyToReceive?: number, CaseQtyToReceive?: number, WarehouseId?: number, WarehouseBinId?: number, UnitPrice?: number, DiscountValue?: number, DiscountType?: number, LocationNotes?: string, ListPrice?: number, UPC?: string, WeightLbs?: number, WeightOz?: number, }>, }, 
    axios: Function
): Promise<{data: post_purchase_orders_id_receive_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/PurchaseOrders/${path.id}/receive`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_purchase_orders_id_custom_columns_type = any
export const get_purchase_orders_id_custom_columns = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: get_purchase_orders_id_custom_columns_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/PurchaseOrders/${path.id}/CustomColumns`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type put_purchase_orders_id_custom_columns_type = any
export const put_purchase_orders_id_custom_columns = async (
    base_url: string, 
    token: string, 
    path: {id: number}, 
    body: {ColumnName: string, Value?: {}, }, 
    axios: Function
): Promise<{data: put_purchase_orders_id_custom_columns_type}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/PurchaseOrders/${path.id}/CustomColumns`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type put_purchase_orders_set_quick_book_status_type = any
export const put_purchase_orders_set_quick_book_status = async (
    base_url: string, 
    token: string,  
    body: {PurchaseIDs?: Array<number>, Exported?: boolean, }, 
    axios: Function
): Promise<{data: put_purchase_orders_set_quick_book_status_type}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/PurchaseOrders/SetQuickBookStatus`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_purchase_orders_serials_type = any
export const get_purchase_orders_serials = async (
    base_url: string, 
    token: string,   
    query: {id: number},
    axios: Function
): Promise<{data: get_purchase_orders_serials_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/PurchaseOrders/Serials`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type get_purchase_orders_type = {Items?: Array<{EmailSentCount?: number, DisableInventoryCount?: boolean, POType?: number, CancelledPOID?: number, TotalBalance?: number, TotalBalanceNotReceivedGood?: number, VendorID?: number, PurchaseTitle?: string, CreatedOn?: string, CreatedBy?: number, OrderTotal?: number, TaxTotal?: number, ShippingTotal?: number, GrandTotal?: number, DateOrdered?: string, LastRevisedOn?: string, RevisedBy?: number, PurchaseOrderStatus?: number, PaymentStatus?: number, ExtraCharges?: number, TotalRefunded?: number, PurchaseOrdersShippingStatus?: number, TrackingNumber?: string, TrackingNumbers?: Array<{ShippedOn?: string, ShippingCarrier?: string, TrackingNumber?: string, }>, ShippedOn?: string, CourierService?: string, PurchaseOrdersPriority?: number, ReceivingStatus?: number, CompanyID?: number, PurchaseOrdersApproved?: boolean, DropShipOrderNumber?: number, VendorInvoiceNumber?: string, VendorInvoiceFileName?: string, VendorInvoiceFileNameOriginal?: string, Invoices?: Array<{InvoiceNumber?: string, }>, Memo?: string, ExpectedDeliveryDate?: string, DiscountTotal?: number, bExported?: boolean, DisplayName?: string, CM?: number, NotesCount?: number, PaidOn?: string, UnitCounts?: number, PurchaseOrderCreditMemo?: boolean, WarehouseID?: number, Items?: Array<{ID?: number, SKU?: string, VendorSKU?: string, ProductName?: string, QtyOrdered?: number, QtyReceived?: number, UnitPrice?: number, AdjustedPrice?: number, LineTotal?: number, ExpectedDeliveryDate?: string, ItemNotes?: string, }>, RequestedShippingCarrier?: string, RequestedShippingService?: string, ShipToAddress?: undefined, ID?: number, }>, TotalResults?: number, }
export const get_purchase_orders = async (
    base_url: string, 
    token: string,   
    query: {pOIds?: Array<number>,companyIDList?: Array<number>,pOStatuses?: Array<number>,receiveWarehouseID?: Array<number>,shippingStatuses?: Array<number>,receivedStatuses?: Array<number>,createDateFrom?: string,createDateTo?: string,paymentStatus?: Array<number>,inventoryCountEnabled?: number,vendorInvoiced?: number,approved?: number,receiveDateFrom?: string,receiveDateTo?: string,updatedDateFrom?: string,updatedDateTo?: string,keyword?: string,qBExported?: number,pageNumber?: number,pageSize?: number},
    axios: Function
): Promise<{data: get_purchase_orders_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/PurchaseOrders`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type post_purchase_orders_type = {Id?: number, }
export const post_purchase_orders = async (
    base_url: string, 
    token: string,  
    body: {CompanyID: number, VendorID: number, POType: number, CaseQtyMode: boolean, DefaultWarehouseID?: number, Description?: string, VendorNote?: string, PaymentTermID?: number, ExpectedDeliveryDate?: string, Products: Array<{ProductID: string, QtyUnitsOrdered?: number, UnitPrice?: number, QtyCasesOrdered?: number, QtyUnitsPerCase?: number, CasePrice?: number, DiscountType?: number, DiscountValue?: number, WarehouseID?: number, ItemNotes?: string, }>, BillingAddress?: undefined, ShippingAddress?: undefined, }, 
    axios: Function
): Promise<{data: post_purchase_orders_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/PurchaseOrders`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_purchase_orders_id_type = {Purchase?: undefined, RelatedPurchaseOrders?: Array<{RelatedPoID?: number, RelationshipType?: number, CreatedOn?: string, }>, VendorAndInvoice?: undefined, Changes?: undefined, RelatedItems?: Array<{ID?: number, RecordType?: string, Url?: string, }>, TotalInfo?: undefined, CustomColumns?: Array<{ID?: number, DataType?: number, DataLength?: number, IsDropDownColumn?: boolean, IsDropDownCustomTextAllowed?: boolean, IsDropDownAllowMultipleSelection?: boolean, ClientID?: number, NewValue?: {}, AllowHTMLPopup?: boolean, DataSourceContainer?: Array<{Key?: string, Value?: string, Additional?: {}, }>, IsRequired?: boolean, ColumnName?: string, DisplayName?: string, Value?: {}, }>, Metadata?: undefined, Statuses?: undefined, ShowProductImageForItems?: boolean, EnablePoPrSellQuantity?: boolean, NotesCount?: number, IsModified?: boolean, }
export const get_purchase_orders_id = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: get_purchase_orders_id_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/PurchaseOrders/${path.id}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type delete_purchase_orders_id_type = any
export const delete_purchase_orders_id = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: delete_purchase_orders_id_type}> => {
    return axios({
        method: 'DELETE', 
        url: `${base_url}/api/PurchaseOrders/${path.id}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type get_purchase_orders_import_download_purchase_orders_template_type = {FileName?: string, Content?: string, }
export const get_purchase_orders_import_download_purchase_orders_template = async (
    base_url: string, 
    token: string,   
    query: {fileFormat: number},
    axios: Function
): Promise<{data: get_purchase_orders_import_download_purchase_orders_template_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/PurchaseOrders/Import/DownloadPurchaseOrdersTemplate`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type get_purchase_orders_import_download_vendor_prices_template_type = {FileName?: string, Content?: string, }
export const get_purchase_orders_import_download_vendor_prices_template = async (
    base_url: string, 
    token: string,   
    query: {fileFormat: number},
    axios: Function
): Promise<{data: get_purchase_orders_import_download_vendor_prices_template_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/PurchaseOrders/Import/DownloadVendorPricesTemplate`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type post_purchase_orders_import_import_purchase_orders_type = {QueuedJobLink?: string, ID?: number, Message?: string, }
export const post_purchase_orders_import_import_purchase_orders = async (
    base_url: string, 
    token: string,  
    body: {Metadata: undefined, FileContents: string, Format?: number, }, 
    axios: Function
): Promise<{data: post_purchase_orders_import_import_purchase_orders_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/PurchaseOrders/Import/ImportPurchaseOrders`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type post_purchase_orders_import_import_vendor_prices_type = {QueuedJobLink?: string, ID?: number, Message?: string, }
export const post_purchase_orders_import_import_vendor_prices = async (
    base_url: string, 
    token: string,  
    body: {Metadata: undefined, FileContents: string, Format?: number, }, 
    axios: Function
): Promise<{data: post_purchase_orders_import_import_vendor_prices_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/PurchaseOrders/Import/ImportVendorPrices`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_queued_jobs_id_type = {Basic?: undefined, OutputFile?: string, InputFile?: string, TotalItemsInPhase?: number, TotalProcessedInPhase?: number, TotalPhases?: number, CurrentPhase?: number, TotalRecords?: number, TotalProcessed?: number, TotalSucceeded?: number, TotalFailure?: number, Parameters?: Array<{JobID?: number, ParameterName?: string, ParameterValue?: string, }>, PickListID?: number, UploadFileRecordId?: number, IsModified?: boolean, }
export const get_queued_jobs_id = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: get_queued_jobs_id_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/QueuedJobs/${path.id}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type get_queued_jobs_output_file_type = {FileName?: string, Content?: string, }
export const get_queued_jobs_output_file = async (
    base_url: string, 
    token: string,   
    query: {id: number},
    axios: Function
): Promise<{data: get_queued_jobs_output_file_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/QueuedJobs/OutputFile`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type put_queued_jobs_priority_type = any
export const put_queued_jobs_priority = async (
    base_url: string, 
    token: string,  
    body: {ID?: number, Priority?: number, }, 
    axios: Function
): Promise<{data: put_queued_jobs_priority_type}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/QueuedJobs/Priority`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_queued_jobs_bulk_update_log_id_type = {CompanyId?: number, SubtractUnExportedOrderQty?: boolean, SubtractUnShippedQty?: boolean, CreateProductIfNotExists?: boolean, DoNotUpdateProducts?: boolean, TotalRecords?: number, TotalSucceeded?: number, TotalFailed?: number, DateUploaded?: string, UploadedById?: number, UploadedByName?: string, Products?: undefined, }
export const get_queued_jobs_bulk_update_log_id = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: get_queued_jobs_bulk_update_log_id_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/QueuedJobs/BulkUpdateLog/${path.id}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type put_queued_jobs_cancel_type = any
export const put_queued_jobs_cancel = async (
    base_url: string, 
    token: string,   
    query: {id: number},
    axios: Function
): Promise<{data: put_queued_jobs_cancel_type}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/QueuedJobs/Cancel`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type get_queued_jobs_type = {Items?: Array<{SubmittedOn?: string, QueuedJobPriority?: number, CompanyName?: string, QueuedJobType?: number, QueuedJobStatus?: number, StartedOn?: string, CompletedOn?: string, TimeElapsed?: number, ErrorMessage?: string, UserID?: number, SubmittedBy?: string, InputFile?: string, OutputFile?: string, CompanyID?: string, RelatedTaskID?: number, ID?: number, }>, TotalResults?: number, }
export const get_queued_jobs = async (
    base_url: string, 
    token: string,   
    query: {jobID?: number,jobType?: Array<number>,submittedBy?: number,jobStatuses?: Array<number>,companyIDList?: Array<number>,submittedFrom?: string,submittedTo?: string,queuedJobPriorities?: Array<number>,pageNumber?: number,pageSize?: number},
    axios: Function
): Promise<{data: get_queued_jobs_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/QueuedJobs`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type get_rma_get_all_by_view_type = {Items?: Array<{Items?: Array<{CustomerID?: number, FirstName?: string, LastName?: string, CustomerFirstName?: string, CustomerLastName?: string, UserID?: number, CreatedOn?: string, ClosedOn?: string, ReceivedOn?: string, CreatedBy?: string, RMAStatusCode?: number, OrderSource?: number, OrderSourceRMAID?: string, Reason?: number, ReceivedStatus?: number, TotalRefunded?: number, Company?: string, CompanyID?: number, Exported?: number, CustomerUserName?: string, TrackingNumber?: string, RefundStatus?: number, ReturnLabelCharges?: number, Items?: Array<{ID?: number, RMAID?: number, OrderID?: number, SKU?: string, RMANoteContains?: string, SerialNumber?: string, Reason?: number, ReasonName?: string, Resolution?: number, ReceivedStatus?: string, RefundStatus?: number, RefundStatusName?: string, OrderSubType?: number, OrderSubtypeName?: string, OrderSourceOrderID?: string, OrderSource?: number, EnabledOnChannels?: Array<number>, Company?: string, CompanyID?: number, ReturnedOn?: string, QtyReturned?: number, QtyReceived?: number, ReturnedToWarehouseID?: number, WarehouseBinID?: number, ProblemDescription?: string, }>, ReturnNotes?: Array<{EntityID?: number, Category?: number, NoteID?: number, Note?: string, AuditDate?: string, CreatedBy?: number, CreatedByName?: string, CreatedByEmail?: string, }>, ID?: number, }>, TotalResults?: number, }>, TotalResults?: number, }
export const get_rma_get_all_by_view = async (
    base_url: string, 
    token: string,   
    query: {viewID: number,pageNumber: number,pageSize: number},
    axios: Function
): Promise<{data: get_rma_get_all_by_view_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Rma/GetAllByView`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type post_rma_id_receive_type = any
export const post_rma_id_receive = async (
    base_url: string, 
    token: string, 
    path: {id: number}, 
    body: {Items?: Array<{RmaItemID: number, QtyToReceive: number, WarehouseID: number, WarehouseBinID?: number, }>, }, 
    axios: Function
): Promise<{data: post_rma_id_receive_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Rma/${path.id}/Receive`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type post_rma_id_resolution_type = any
export const post_rma_id_resolution = async (
    base_url: string, 
    token: string, 
    path: {id: number}, 
    body: {ResolutionType: number, Comment: string, Items: Array<{RmaItemID: number, ReplacementSKU?: string, RefundAmount?: number, }>, }, 
    axios: Function
): Promise<{data: post_rma_id_resolution_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Rma/${path.id}/Resolution`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_rma_return_reasons_type = any
export const get_rma_return_reasons = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: get_rma_return_reasons_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Rma/ReturnReasons`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type get_rma_id_shipping_labels_type = any
export const get_rma_id_shipping_labels = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: get_rma_id_shipping_labels_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Rma/${path.id}/ShippingLabels`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type post_rma_id_shipping_labels_type = {ID?: number, }
export const post_rma_id_shipping_labels = async (
    base_url: string, 
    token: string, 
    path: {id: number}, 
    body: {Weight: undefined, Dimensions: undefined, ShippingCarrier?: string, ShippingService?: number, PackageType?: string, InsuranceProvider?: string, InsuranceAmount?: number, DeliveryConfirmation?: number, ShipFromAddress?: undefined, ShipToAddress?: undefined, }, 
    axios: Function
): Promise<{data: post_rma_id_shipping_labels_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Rma/${path.id}/ShippingLabels`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_rma_id_shipping_labels_carriers_type = any
export const get_rma_id_shipping_labels_carriers = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: get_rma_id_shipping_labels_carriers_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Rma/${path.id}/ShippingLabels/Carriers`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type get_rma_id_shipping_labels_services_type = any
export const get_rma_id_shipping_labels_services = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    query: {shippingCarrier: string},
    axios: Function
): Promise<{data: get_rma_id_shipping_labels_services_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Rma/${path.id}/ShippingLabels/Services`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type get_rma_id_shipping_labels_package_types_type = any
export const get_rma_id_shipping_labels_package_types = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    query: {shippingCarrier: string},
    axios: Function
): Promise<{data: get_rma_id_shipping_labels_package_types_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Rma/${path.id}/ShippingLabels/PackageTypes`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type get_rma_id_shipping_labels_insurance_providers_type = any
export const get_rma_id_shipping_labels_insurance_providers = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    query: {shippingCarrier: string},
    axios: Function
): Promise<{data: get_rma_id_shipping_labels_insurance_providers_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Rma/${path.id}/ShippingLabels/InsuranceProviders`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type get_rma_id_shipping_labels_label_id_type = any
export const get_rma_id_shipping_labels_label_id = async (
    base_url: string, 
    token: string, 
    path: {id: number,labelId: number},  
    axios: Function
): Promise<{data: get_rma_id_shipping_labels_label_id_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Rma/${path.id}/ShippingLabels/${path.labelId}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type post_rma_id_notes_type = any
export const post_rma_id_notes = async (
    base_url: string, 
    token: string, 
    path: {id: number}, 
    body: {Category: number, Message: string, }, 
    axios: Function
): Promise<{data: post_rma_id_notes_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Rma/${path.id}/Notes`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_rma_views_type = any
export const get_rma_views = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: get_rma_views_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Rma/Views`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type get_rma_id_custom_columns_type = any
export const get_rma_id_custom_columns = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: get_rma_id_custom_columns_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Rma/${path.id}/CustomColumns`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type put_rma_id_custom_columns_type = any
export const put_rma_id_custom_columns = async (
    base_url: string, 
    token: string, 
    path: {id: number}, 
    body: {ColumnName: string, Value?: {}, }, 
    axios: Function
): Promise<{data: put_rma_id_custom_columns_type}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Rma/${path.id}/CustomColumns`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_rma_id_items_type = any
export const get_rma_id_items = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: get_rma_id_items_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Rma/${path.id}/Items`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type put_rma_id_items_type = any
export const put_rma_id_items = async (
    base_url: string, 
    token: string, 
    path: {id: number}, 
    body: {ID?: number, QtyReturned?: number, ReturnReason?: number, ProblemDescription?: string, ApprovalStatus?: number, }, 
    axios: Function
): Promise<{data: put_rma_id_items_type}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Rma/${path.id}/Items`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type post_rma_id_items_type = any
export const post_rma_id_items = async (
    base_url: string, 
    token: string, 
    path: {id: number}, 
    body: {OrderID?: number, OrderItemID?: number, KitItemProductID?: string, QtyReturned?: number, ReturnReason?: number, ProblemDescription?: string, ApprovalStatus?: number, }, 
    axios: Function
): Promise<{data: post_rma_id_items_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Rma/${path.id}/Items`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_rma_type = {Items?: Array<{CustomerID?: number, FirstName?: string, LastName?: string, CustomerFirstName?: string, CustomerLastName?: string, UserID?: number, CreatedOn?: string, ClosedOn?: string, ReceivedOn?: string, CreatedBy?: string, RMAStatusCode?: number, OrderSource?: number, OrderSourceRMAID?: string, Reason?: number, ReceivedStatus?: number, TotalRefunded?: number, Company?: string, CompanyID?: number, Exported?: number, CustomerUserName?: string, TrackingNumber?: string, RefundStatus?: number, ReturnLabelCharges?: number, Items?: Array<{ID?: number, RMAID?: number, OrderID?: number, SKU?: string, RMANoteContains?: string, SerialNumber?: string, Reason?: number, ReasonName?: string, Resolution?: number, ReceivedStatus?: string, RefundStatus?: number, RefundStatusName?: string, OrderSubType?: number, OrderSubtypeName?: string, OrderSourceOrderID?: string, OrderSource?: number, EnabledOnChannels?: Array<number>, Company?: string, CompanyID?: number, ReturnedOn?: string, QtyReturned?: number, QtyReceived?: number, ReturnedToWarehouseID?: number, WarehouseBinID?: number, ProblemDescription?: string, }>, ReturnNotes?: Array<{EntityID?: number, Category?: number, NoteID?: number, Note?: string, AuditDate?: string, CreatedBy?: number, CreatedByName?: string, CreatedByEmail?: string, }>, ID?: number, }>, TotalResults?: number, }
export const get_rma = async (
    base_url: string, 
    token: string,   
    query: {rMAIDs?: Array<number>,orderIDs?: Array<number>,companyIDList?: Array<number>,productID?: Array<string>,rmaStatuses?: Array<number>,orderSources?: Array<number>,orderSourceRMAID?: string,orderSourceOrderIDs?: Array<string>,dateFrom?: string,dateTo?: string,closedOnFrom?: string,closedOnTo?: string,returnedOnFrom?: string,returnedOnTo?: string,lastUpdatedOnFrom?: string,lastUpdatedOnTo?: string,pageNumber?: number,pageSize?: number},
    axios: Function
): Promise<{data: get_rma_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Rma`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type post_rma_type = {ID?: number, }
export const post_rma = async (
    base_url: string, 
    token: string,  
    body: {OrderID: number, OrderItems: Array<{OrderItemID: number, QtyToReturn?: number, ReasonID?: number, Description?: string, BundleItems?: Array<{ProductID: string, QtyToReturn: number, ReasonID: number, Description?: string, }>, }>, }, 
    axios: Function
): Promise<{data: post_rma_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Rma`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_rma_id_type = {ID?: number, CustomerID?: string, CustomerName?: string, StatusCode?: number, CompanyID?: number, CompanyName?: string, OrderNumberOriginal?: number, OriginalOrderTotal?: number, ReplacementOrderId?: number, ShipViaSourceRMAID?: string, ReturnLabelCharges?: number, TrackingNumber?: string, IsExported?: boolean, IsDropShipRMA?: boolean, VendorRmaNumber?: string, CreditMemo?: number, Changes?: undefined, Items?: Array<{ID?: number, ProductID?: string, DisplayName?: string, QtyOrdered?: number, QtyToReturn?: number, QtyReceived?: number, ReturnResolution?: string, eBayItemID?: string, eBayItemUrl?: string, OriginalOrderID?: number, OriginalOrderItemID?: number, ShippedByID?: number, ShippedByName?: string, ProblemDescription?: string, ReturnReason?: number, RefundAmount?: number, BinName?: string, ApprovalStatus?: number, ReturnedToWarehouseID?: number, BinID?: number, OriginalOrderItemKitItemProductID?: string, ReceiveStatus?: number, }>, MultipleReplacementOrderId?: Array<number>, }
export const get_rma_id = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: get_rma_id_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Rma/${path.id}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type put_rma_id_type = any
export const put_rma_id = async (
    base_url: string, 
    token: string, 
    path: {id: number}, 
    body: {Status?: number, TrackingNumber?: string, IsExported?: boolean, }, 
    axios: Function
): Promise<{data: put_rma_id_type}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Rma/${path.id}`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_scheduled_tasks_id_execution_history_type = {Results?: Array<{ExecutedOn?: string, JobID?: number, ExecutedBy?: string, Status?: string, StartedOn?: string, CompletedOn?: string, Error?: string, Duration?: string, UserID?: string, LogFileName?: string, }>, TotalResults?: number, }
export const get_scheduled_tasks_id_execution_history = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    query: {pageNumber: number,pageSize: number},
    axios: Function
): Promise<{data: get_scheduled_tasks_id_execution_history_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/ScheduledTasks/${path.id}/ExecutionHistory`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type post_scheduled_tasks_id_execute_task_type = {QueuedJobLink?: string, ID?: number, Message?: string, }
export const post_scheduled_tasks_id_execute_task = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: post_scheduled_tasks_id_execute_task_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/ScheduledTasks/${path.id}/ExecuteTask`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type get_settings_payment_terms_type = any
export const get_settings_payment_terms = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: get_settings_payment_terms_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Settings/PaymentTerms`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type get_settings_manufacturers_type = any
export const get_settings_manufacturers = async (
    base_url: string, 
    token: string,   
    query: {companyId: number},
    axios: Function
): Promise<{data: get_settings_manufacturers_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Settings/Manufacturers`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type get_settings_brands_type = any
export const get_settings_brands = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: get_settings_brands_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Settings/Brands`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type get_vendors_id_products_type = {Items?: Array<{ProductSKU?: string, VendorID?: number, Price?: number, VendorSKU?: string, IsAvailable?: boolean, DateModified?: string, Notes?: string, PricePerCase?: number, ProductName?: string, QtyPerCase?: number, Qty?: number, }>, TotalResults?: number, }
export const get_vendors_id_products = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    query: {productSKU?: string,vendorSKU?: string,pageNumber?: number,pageSize?: number},
    axios: Function
): Promise<{data: get_vendors_id_products_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Vendors/${path.id}/products`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type put_vendors_vendor_id_products_product_sku_type = any
export const put_vendors_vendor_id_products_product_sku = async (
    base_url: string, 
    token: string, 
    path: {vendorId: number,productSKU: string}, 
    body: {Price?: number, PricePerCase?: number, QtyPerCase?: number, IsAvailable?: boolean, Qty?: number, }, 
    axios: Function
): Promise<{data: put_vendors_vendor_id_products_product_sku_type}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Vendors/${path.vendorId}/products/${path.productSKU}`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type put_vendors_vendor_id_products_type = any
export const put_vendors_vendor_id_products = async (
    base_url: string, 
    token: string, 
    path: {vendorId: number}, 
    body: {ProductID: string, VendorSKU?: string, Notes?: string, Price?: number, PricePerCase?: number, QtyPerCase?: number, IsAvailable?: boolean, Qty?: number, }, 
    axios: Function
): Promise<{data: put_vendors_vendor_id_products_type}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Vendors/${path.vendorId}/products`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type post_vendors_vendor_id_products_type = any
export const post_vendors_vendor_id_products = async (
    base_url: string, 
    token: string, 
    path: {vendorId: number}, 
    body: {VendorProducts?: Array<{ProductSKU?: string, Price?: number, VendorSKU?: string, IsAvailable?: boolean, Notes?: string, PricePerCase?: number, QtyPerCase?: number, Qty?: number, }>, }, 
    axios: Function
): Promise<{data: post_vendors_vendor_id_products_type}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Vendors/${path.vendorId}/products`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export type get_vendors_id_type = {Alias?: string, AccountNumber?: string, EmailCC?: string, Website?: string, IsActive?: boolean, ID?: number, Name?: string, Email?: string, IsDefault?: boolean, }
export const get_vendors_id = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: get_vendors_id_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Vendors/${path.id}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type get_vendors_type = {Items?: Array<{ID?: number, Name?: string, Email?: string, IsDefault?: boolean, }>, TotalResults?: number, }
export const get_vendors = async (
    base_url: string, 
    token: string,   
    query: {vendorIDs?: Array<number>,names?: Array<string>,email?: string,activeStatus?: number,pageNumber?: number,pageSize?: number},
    axios: Function
): Promise<{data: get_vendors_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Vendors`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export type get_warehouses_id_type = {General?: undefined, WarehouseAddress?: undefined, IsModified?: boolean, }
export const get_warehouses_id = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: get_warehouses_id_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Warehouses/${path.id}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export type get_warehouses_type = {Items?: Array<{Name?: string, IsDefault?: boolean, WarehouseType?: number, IsSellAble?: boolean, QBWarehouseName?: string, CreatedBy?: number, CreatedOn?: string, CreatedByUsername?: string, CreatedByFirstName?: string, CreatedByLastName?: string, EnforceBins?: boolean, WarehouseAddress?: undefined, ID?: number, }>, TotalResults?: number, }
export const get_warehouses = async (
    base_url: string, 
    token: string,   
    query: {warehouseIds?: Array<number>,warehouseType?: number,name?: string,isDefault?: number,isSellable?: number,pageNumber?: number,pageSize?: number},
    axios: Function
): Promise<{data: get_warehouses_type}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Warehouses`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}