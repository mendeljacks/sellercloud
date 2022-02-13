export const post_token = async (
    base_url: string, 
    token: string,  
    body: {Username: string, Password: string, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/token`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const put_catalog_basic_info = async (
    base_url: string, 
    token: string,  
    body: {ProductID: string, ShortDescription?: string, LongDescription?: string, ListPrice?: number, SitePrice?: number, SiteCost?: number, ProductName?: string, IsActive?: boolean, MasterSKU?: string, ManufacturerSKU?: string, UPC?: string, ASIN?: string, FNSKU?: string, EAN?: string, GTIN?: string, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Catalog/BasicInfo`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_catalog_id_prices = async (
    base_url: string, 
    token: string, 
    path: {id: string},  
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/${path.id}/Prices`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const put_catalog_id_prices = async (
    base_url: string, 
    token: string, 
    path: {id: string}, 
    body: {SitePrice?: number, ChannelsPrices?: Array<{ChannelID: number, Price?: number, UseDefaultSitePrice?: boolean, }>, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Catalog/${path.id}/Prices`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_catalog_prices = async (
    base_url: string, 
    token: string,   
    query: {productID: string},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Prices`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const put_catalog_prices = async (
    base_url: string, 
    token: string,  
    body: {ProductID: string, SitePrice?: number, ChannelsPrices?: Array<{ChannelID: number, Price?: number, UseDefaultSitePrice?: boolean, }>, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Catalog/Prices`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_catalog_views = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Views`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const get_catalog_get_all_by_view = async (
    base_url: string, 
    token: string,   
    query: {viewID: number,pageNumber: number,pageSize: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/GetAllByView`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const get_catalog_product_types = async (
    base_url: string, 
    token: string,   
    query: {productTypeIds?: Array<number>,typeNames?: Array<string>,pageNumber?: number,pageSize?: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/ProductTypes`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const get_catalog_variation_dimensions = async (
    base_url: string, 
    token: string,   
    query: {searchTerm?: string,pageNumber?: number,pageSize?: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/VariationDimensions`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const get_catalog_variation = async (
    base_url: string, 
    token: string,   
    query: {productID?: string,pageNumber?: number,pageSize?: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Variation`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const get_catalog = async (
    base_url: string, 
    token: string,   
    query: {sKU?: string,displayShadows?: number,selectedKits?: number,activeStatus?: number,poID?: Array<number>,companyID?: Array<number>,vendorID?: Array<number>,defaultVendorID?: Array<number>,vendorSKU?: Array<string>,warehouse?: Array<number>,uPC?: string,physicalQtyFrom?: number,physicalQtyTo?: number,kitType?: number,lastAggregateFrom?: string,lastAggregateTo?: string,lastUpdatedFrom?: string,lastUpdatedTo?: string,keyword?: string,pageNumber?: number,pageSize?: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const get_catalog_imports_basic_imports_types = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Imports/BasicImports/Types`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const get_catalog_imports_basic_imports_type_of_import_template = async (
    base_url: string, 
    token: string, 
    path: {typeOfImport: number},  
    query: {fileFormat: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Imports/BasicImports/${path.typeOfImport}/Template`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const post_catalog_imports_basic_imports_type_of_import = async (
    base_url: string, 
    token: string, 
    path: {typeOfImport: number}, 
    body: {FileContents: string, Format?: number, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Catalog/Imports/BasicImports/${path.typeOfImport}`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_catalog_imports_custom_templates = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Imports/Custom/Templates`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const post_catalog_imports_custom_templates = async (
    base_url: string, 
    token: string,  
    body: {TemplateFields: Array<string>, TemplateName: string, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Catalog/Imports/Custom/Templates`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_catalog_imports_custom_templates_fields = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Imports/Custom/Templates/Fields`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const get_catalog_imports_custom_templates_template_name = async (
    base_url: string, 
    token: string, 
    path: {templateName: string},  
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Imports/Custom/Templates/${path.templateName}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const delete_catalog_imports_custom_templates_template_name = async (
    base_url: string, 
    token: string, 
    path: {templateName: string},  
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'DELETE', 
        url: `${base_url}/api/Catalog/Imports/Custom/Templates/${path.templateName}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const get_catalog_imports_custom_template = async (
    base_url: string, 
    token: string,   
    query: {templateName?: string,templateFields?: Array<string>,toAddSampleRow?: boolean,productId?: string,fileFormat?: number,formatProduct?: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Imports/Custom/Template`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const post_catalog_imports_custom = async (
    base_url: string, 
    token: string,  
    body: {Metadata: undefined, FileContents: string, Format?: number, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Catalog/Imports/Custom`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const post_catalog_exports_basic = async (
    base_url: string, 
    token: string,  
    body: {StandardExportKind?: number, ProductIds: Array<string>, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Catalog/Exports/Basic`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_catalog_exports_custom_metadata = async (
    base_url: string, 
    token: string,   
    query: {includeAdvancedColumns?: boolean},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Exports/Custom/Metadata`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const post_catalog_exports_custom = async (
    base_url: string, 
    token: string,  
    body: {Columns: Array<{OriginalName: string, DisplayName?: string, }>, FileFormat?: number, SortBy?: string, ProductIds: Array<string>, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Catalog/Exports/Custom`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_catalog_exports_custom_templates_id = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Exports/Custom/Templates/${path.id}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const get_catalog_exports_via_plugin_metadata = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Exports/ViaPlugin/Metadata`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const post_catalog_exports_via_plugin = async (
    base_url: string, 
    token: string,  
    body: {PluginProfileKey: string, FileFormat?: number, ProductIds: Array<string>, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Catalog/Exports/ViaPlugin`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_catalog_exports_via_mapping_profile_metadata = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Exports/ViaMappingProfile/Metadata`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const post_catalog_exports_via_mapping_profile = async (
    base_url: string, 
    token: string,  
    body: {PluginProfileKey: string, FileFormat?: number, ProductIds: Array<string>, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Catalog/Exports/ViaMappingProfile`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_catalog_imports_per_company_types = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Imports/PerCompany/Types`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const get_catalog_imports_per_company_type_of_import_template = async (
    base_url: string, 
    token: string, 
    path: {typeOfImport: number},  
    query: {fileFormat: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Imports/PerCompany/${path.typeOfImport}/Template`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const post_catalog_imports_per_company_company_id_type_of_import = async (
    base_url: string, 
    token: string, 
    path: {companyId: number,typeOfImport: number}, 
    body: {Metadata: undefined, FileContents: string, Format?: number, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Catalog/Imports/PerCompany/${path.companyId}/${path.typeOfImport}`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_catalog_imports_variations_template = async (
    base_url: string, 
    token: string,   
    query: {fileFormat: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Imports/Variations/Template`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const get_catalog_imports_shadows_template = async (
    base_url: string, 
    token: string,   
    query: {fileFormat: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Imports/Shadows/Template`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const get_catalog_imports_kits_template = async (
    base_url: string, 
    token: string,   
    query: {fileFormat: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Imports/Kits/Template`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const get_catalog_imports_ebay_specifics_template = async (
    base_url: string, 
    token: string,   
    query: {fileFormat: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Imports/EbaySpecifics/Template`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const get_catalog_imports_newegg_biz_attributes_template = async (
    base_url: string, 
    token: string,   
    query: {fileFormat: number,multiFormat: boolean},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Imports/NeweggBizAttributes/Template`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const get_catalog_imports_newegg_com_attributes_template = async (
    base_url: string, 
    token: string,   
    query: {fileFormat: number,multiFormat: boolean},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Imports/NeweggComAttributes/Template`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const get_catalog_imports_variations_images_template = async (
    base_url: string, 
    token: string,   
    query: {fileFormat: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Imports/Variations/Images/Template`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const get_catalog_imports_images_template = async (
    base_url: string, 
    token: string,   
    query: {fileFormat: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Catalog/Imports/Images/Template`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const post_catalog_imports_variations = async (
    base_url: string, 
    token: string,  
    body: {Metadata: undefined, FileContents: string, Format?: number, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Catalog/Imports/Variations`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const post_catalog_imports_shadows = async (
    base_url: string, 
    token: string,  
    body: {Metadata: undefined, FileContents: string, Format?: number, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Catalog/Imports/Shadows`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const post_catalog_imports_kits = async (
    base_url: string, 
    token: string,  
    body: {Metadata: undefined, FileContents: string, Format?: number, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Catalog/Imports/Kits`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const post_catalog_imports_ebay_specifics = async (
    base_url: string, 
    token: string,  
    body: {Metadata: undefined, FileContents: string, Format?: number, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Catalog/Imports/EbaySpecifics`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const post_catalog_imports_newegg_biz_attributes = async (
    base_url: string, 
    token: string,  
    body: {Metadata: undefined, FileContents: string, Format?: number, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Catalog/Imports/NeweggBizAttributes`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const post_catalog_imports_newegg_com_attributes = async (
    base_url: string, 
    token: string,  
    body: {Metadata: undefined, FileContents: string, Format?: number, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Catalog/Imports/NeweggComAttributes`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const post_catalog_imports_variations_images = async (
    base_url: string, 
    token: string,  
    body: {FileContents: string, Format?: number, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Catalog/Imports/Variations/Images`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const post_catalog_imports_images = async (
    base_url: string, 
    token: string,  
    body: {FileContents: string, Format?: number, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Catalog/Imports/Images`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_companies_id_shipping_api = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Companies/${path.id}/ShippingApi`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const get_companies_id_settings_ebay_business_policies = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    query: {siteCode: number,pageNumber?: number,pageSize?: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Companies/${path.id}/Settings/ebay/BusinessPolicies`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const get_companies_id_settings_ebay_site_codes = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Companies/${path.id}/Settings/ebay/SiteCodes`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const get_companies_id = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Companies/${path.id}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const get_companies = async (
    base_url: string, 
    token: string,   
    query: {companyID?: Array<number>,channel?: Array<number>,keyword?: string,pageNumber?: number,pageSize?: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Companies`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const put_customers_id_custom_columns = async (
    base_url: string, 
    token: string, 
    path: {id: number}, 
    body: {CustomColumns: Array<{ColumnName: string, Value?: {}, }>, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Customers/${path.id}/CustomColumns`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const put_customers_id_addresses = async (
    base_url: string, 
    token: string, 
    path: {id: number}, 
    body: {Addresses: Array<{ID: number, CompanyName?: string, AddressSource: number, AddressStatus: number, IsShippingAddress: boolean, IsBillingAddress: boolean, Address2?: string, ContactName?: string, Country: string, City: string, State?: string, Region?: string, ZipCode: string, Address: string, Phone?: string, Fax?: string, }>, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Customers/${path.id}/Addresses`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_customers = async (
    base_url: string, 
    token: string,   
    query: {customerIds?: Array<string>,email?: string,firstName?: string,lastName?: string,rating?: number,customerType?: number,subscribed?: number,createdOnFrom?: string,createdOnTo?: string,modifiedOnFrom?: string,modifiedOnTo?: string,phoneNumber?: string,city?: string,zipCode?: string,exported?: number,channel?: number,corporateName?: string,companyIds?: Array<string>,keyword?: string,pageNumber?: number,pageSize?: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Customers`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const post_customers = async (
    base_url: string, 
    token: string,  
    body: {CompanyID?: number, FirstName: string, LastName?: string, Email?: string, BusinessName?: string, CustomerType?: number, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Customers`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_customers_id = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Customers/${path.id}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const get_diagnostics_server = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Diagnostics/Server`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const get_diagnostics_tenant = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Diagnostics/Tenant`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const get_inventory_id = async (
    base_url: string, 
    token: string, 
    path: {id: string},  
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Inventory/${path.id}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const delete_inventory_id = async (
    base_url: string, 
    token: string, 
    path: {id: string},  
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'DELETE', 
        url: `${base_url}/api/Inventory/${path.id}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const get_inventory_details = async (
    base_url: string, 
    token: string,   
    query: {productID: string},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Inventory/Details`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const get_inventory = async (
    base_url: string, 
    token: string,   
    query: {inventoryID?: string,eAN?: string,poID?: Array<number>,companyID?: Array<number>,vendorID?: Array<number>,defaultVendorID?: Array<number>,vendorSKU?: Array<string>,warehouse?: Array<number>,uPC?: string,physicalQtyFrom?: number,physicalQtyTo?: number,kitType?: number,lastAggregateFrom?: string,lastAggregateTo?: string,lastUpdatedFrom?: string,lastUpdatedTo?: string,keyword?: string,pageNumber?: number,pageSize?: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Inventory`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const put_inventory = async (
    base_url: string, 
    token: string,  
    body: {ID: string, ProductName?: string, CompanyID?: number, ProductTypeID?: number, Condition?: number, MasterSku?: string, UPC?: string, ShippingWeights?: undefined, ProductWeights?: undefined, ProductDimensions?: undefined, ShippingDimensions?: undefined, ShippingPackageTypeID?: number, LocationNotes?: string, QtyPerCase?: number, QtyPerPallet?: number, Replenishable?: boolean, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Inventory`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const delete_inventory = async (
    base_url: string, 
    token: string,   
    query: {productID: string},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'DELETE', 
        url: `${base_url}/api/Inventory`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const get_inventory_product_id_warehouses_warehouse_id = async (
    base_url: string, 
    token: string, 
    path: {productID: string,warehouseID: number},  
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Inventory/${path.productID}/Warehouses/${path.warehouseID}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const get_inventory_product_id_warehouses = async (
    base_url: string, 
    token: string, 
    path: {productID: string},  
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Inventory/${path.productID}/Warehouses`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const get_inventory_warehouses = async (
    base_url: string, 
    token: string,   
    query: {productID: string,warehouseID?: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Inventory/Warehouses`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const put_inventory_set_physical_inventory = async (
    base_url: string, 
    token: string,  
    body: {WarehouseID?: number, ProductID: string, InventoryDate?: string, PhysicalQty: number, SiteCost?: number, PinCode?: string, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Inventory/SetPhysicalInventory`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const put_inventory_adjust_physical_inventory = async (
    base_url: string, 
    token: string,  
    body: {WarehouseID?: number, ProductID: string, Qty?: number, AdjustmentType: number, Reason: string, InventoryCost?: number, SiteCost?: number, PinCode?: string, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Inventory/AdjustPhysicalInventory`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const put_inventory_import_physical_inventory = async (
    base_url: string, 
    token: string,  
    body: {UpdateType?: number, FileContent: string, InventoryDate: string, Format?: number, WarehouseID?: number, PinCode?: string, MergeDefaultWarehouseInventoryIntoShadowParent?: boolean, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Inventory/ImportPhysicalInventory`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const post_inventory_get_serial_numbers = async (
    base_url: string, 
    token: string,  
    body: {ProductID: string, SerialNumber?: string, WarehouseID?: number, InstockOnly?: boolean, ReceivedOnFromDate?: string, ReceivedOnToDate?: string, PageNumber?: number, PageSize?: number, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Inventory/GetSerialNumbers`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_inventory_import_download_inventory_template = async (
    base_url: string, 
    token: string,   
    query: {template: number,fileFormat: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Inventory/Import/DownloadInventoryTemplate`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const post_inventory_import_inventory_template_update_type = async (
    base_url: string, 
    token: string, 
    path: {updateType: number}, 
    body: {FileContents: string, InventoryDate: string, Format?: number, WarehouseID?: number, PinCode?: string, MergeDefaultWarehouseInventoryIntoShadowParent?: boolean, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Inventory/Import/InventoryTemplate/${path.updateType}`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_orders_order_id_custom_columns = async (
    base_url: string, 
    token: string, 
    path: {orderID: number},  
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Orders/${path.orderID}/CustomColumns`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const put_orders_order_id_custom_columns = async (
    base_url: string, 
    token: string, 
    path: {orderID: number}, 
    body: {ColumnName: string, Value?: {}, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Orders/${path.orderID}/CustomColumns`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_orders_packages = async (
    base_url: string, 
    token: string,   
    query: {id: number,pageNumber: number,pageSize: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Orders/Packages`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const get_orders_get_all_by_view = async (
    base_url: string, 
    token: string,   
    query: {viewID: number,pageNumber: number,pageSize: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Orders/GetAllByView`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const get_orders_way_to_pay_link = async (
    base_url: string, 
    token: string,   
    query: {id: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Orders/WayToPayLink`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const put_orders_shipping_status = async (
    base_url: string, 
    token: string,  
    body: {OrderID?: number, ShippingCarrier: string, ShippingService: string, ShipFromWarehouseID?: number, DeclaredValue?: number, ShipDate?: string, TrackingNumber?: string, ShippingCost?: number, Width?: number, Height?: number, Length?: number, Weight?: number, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Orders/ShippingStatus`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_orders_serials = async (
    base_url: string, 
    token: string,   
    query: {id: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Orders/Serials`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const put_orders_serials = async (
    base_url: string, 
    token: string,  
    body: {Items?: Array<{OrderID?: number, ProductID?: string, SerialNumber?: string, OrderItemID?: number, KitItemID?: number, }>, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Orders/Serials`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_orders_notes = async (
    base_url: string, 
    token: string,   
    query: {id: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Orders/Notes`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const post_orders_order_id_notes = async (
    base_url: string, 
    token: string, 
    path: {orderID: number}, 
    body: {Message?: string, Category?: number, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Orders/${path.orderID}/Notes`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_orders_custom_columns = async (
    base_url: string, 
    token: string,   
    query: {id: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Orders/CustomColumns`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const post_orders_get_custom_columns = async (
    base_url: string, 
    token: string,  
    body: {OrderIDs?: Array<number>, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Orders/GetCustomColumns`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const put_orders_shipping_status_single_package = async (
    base_url: string, 
    token: string,  
    body: {OrderID?: number, ShipDate?: string, TrackingNumber?: string, ShippingCost?: number, PackageID?: number, CarrierName?: string, ShippingMethod?: string, WarehouseID?: number, Length?: number, Width?: number, Height?: number, Weight?: number, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Orders/ShippingStatus/SinglePackage`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const put_orders_set_unshipped = async (
    base_url: string, 
    token: string,  
    body: {Orders: Array<number>, PIN?: string, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Orders/SetUnshipped`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const put_orders_set_exported = async (
    base_url: string, 
    token: string,  
    body: {Orders: Array<number>, Exported: boolean, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Orders/SetExported`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const put_orders_set_quick_book_status = async (
    base_url: string, 
    token: string,  
    body: {OrderIDs?: Array<number>, Exported?: boolean, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Orders/SetQuickBookStatus`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const put_orders_status_code = async (
    base_url: string, 
    token: string,  
    body: {Orders: Array<number>, Status: number, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Orders/StatusCode`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const put_orders_mark_ready_for_pickup = async (
    base_url: string, 
    token: string,  
    body: {Orders: Array<number>, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Orders/MarkReadyForPickup`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const put_orders_mark_picked_up = async (
    base_url: string, 
    token: string,  
    body: {Orders: Array<number>, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Orders/MarkPickedUp`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_orders_id_picklist_ids = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Orders/${path.id}/PicklistIDs`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const put_orders_dropship_status = async (
    base_url: string, 
    token: string,  
    body: {Orders: Array<number>, DropshipStatus: number, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Orders/DropshipStatus`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const post_orders_id_upload_document = async (
    base_url: string, 
    token: string, 
    path: {id: number}, 
    body: {FileContent: string, FileName: string, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Orders/${path.id}/UploadDocument`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_orders_check_splitted_status = async (
    base_url: string, 
    token: string,   
    query: {orderID: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Orders/CheckSplittedStatus`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const get_orders_views = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Orders/Views`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const post_orders_profit_and_loss = async (
    base_url: string, 
    token: string,  
    body: {Orders?: Array<number>, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Orders/ProfitAndLoss`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const put_orders_order_id_items = async (
    base_url: string, 
    token: string, 
    path: {orderID: number}, 
    body: {OrderItemID: number, ProductID?: string, ProductName?: string, SitePrice?: number, DiscountValue?: number, DiscountType?: number, Qty?: number, WarehouseID?: number, Notes?: string, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Orders/${path.orderID}/items`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const post_orders_order_id_items = async (
    base_url: string, 
    token: string, 
    path: {orderID: number}, 
    body: {ProductID: string, ProductName?: string, SitePrice?: number, DiscountValue?: number, DiscountType?: number, Qty: number, LineTaxTotal?: number, FinalValueFee?: number, ReferenceID?: string, Notes?: string, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Orders/${path.orderID}/items`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const delete_orders_order_id_items = async (
    base_url: string, 
    token: string, 
    path: {orderID: number}, 
    body: undefined, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'DELETE', 
        url: `${base_url}/api/Orders/${path.orderID}/items`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const post_orders_print_pdf_invoice = async (
    base_url: string, 
    token: string,  
    body: {OrderIDs?: Array<number>, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Orders/PrintPdfInvoice`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const post_orders_replacement_order = async (
    base_url: string, 
    token: string,  
    body: {OrderID: number, ReasonID: number, AdditionalNote?: string, DisableInventoryCount?: boolean, SecurityPin?: string, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Orders/ReplacementOrder`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_orders_replacement_order_reasons = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Orders/ReplacementOrder/Reasons`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const get_orders_id = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Orders/${path.id}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const put_orders_id = async (
    base_url: string, 
    token: string, 
    path: {id: number}, 
    body: {CompanyId?: number, CustomerId?: number, OrderSource?: number, OrderSubType?: number, SalesRep1?: number, CurrencyCode?: number, DisableInventoryCount?: boolean, ShippingAddress?: undefined, BillingAddress?: undefined, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Orders/${path.id}`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const delete_orders_id = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'DELETE', 
        url: `${base_url}/api/Orders/${path.id}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const get_orders = async (
    base_url: string, 
    token: string,   
    query: {orderIDs?: Array<number>,companyID?: Array<number>,companyGroupID?: Array<number>,orderStatus?: Array<number>,dateRange?: number,shipDateRange?: number,updatedFromDateRange?: number,createdOnDateRange?: number,shippingStatus?: number,trackingNumber?: string,serialNumber?: string,paymentDateRange?: number,sKU?: string,aSIN?: string,createdOnFrom?: string,createdOnTo?: string,lastUpdatedFrom?: string,lastUpdatedTo?: string,channel?: number,orderSubType?: number,orderSourceOrderIDList?: Array<string>,qBExported?: number,paymentStatus?: number,dropShipStatus?: number,warehouseID?: Array<number>,userID?: number,shipFromDate?: string,shipToDate?: string,orderFromDate?: string,orderToDate?: string,orderBy?: number,isAscending?: boolean,keyword?: string,picklistID?: string,replacementOrder?: number,pageNumber?: number,pageSize?: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Orders`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const post_orders = async (
    base_url: string, 
    token: string,  
    body: {ID?: number, CustomerDetails: undefined, OrderDetails: undefined, GiftDetails?: undefined, Products?: Array<{ProductID?: string, ReferenceID?: string, ProductName?: string, SitePrice?: number, DiscountValue?: number, DiscountType?: number, Qty?: number, LineTaxTotal?: number, FinalValueFee?: number, Notes?: string, }>, ShippingAddress: undefined, BillingAddress: undefined, ShippingMethodDetails?: undefined, Notes?: Array<{EntityID?: number, Category?: number, NoteID?: number, Note?: string, AuditDate?: string, CreatedBy?: number, CreatedByName?: string, CreatedByEmail?: string, }>, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Orders`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const put_orders_order_id_receive_manual_payment = async (
    base_url: string, 
    token: string, 
    path: {orderID: number}, 
    body: {Amount?: number, Notes?: string, PaymentMethod: number, ReferenceNumber?: string, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Orders/${path.orderID}/ReceiveManualPayment`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const put_orders_order_id_receive_check = async (
    base_url: string, 
    token: string, 
    path: {orderID: number}, 
    body: {Amount?: number, Notes?: string, CheckNumber: string, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Orders/${path.orderID}/ReceiveCheck`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const post_picklists = async (
    base_url: string, 
    token: string,  
    body: {Title: string, WarehouseId: number, Orders: Array<number>, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Picklists`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_picklists_id_order_ids = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Picklists/${path.id}/OrderIDs`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const get_picklists_products = async (
    base_url: string, 
    token: string,   
    query: {picklistID: number,pageNumber: number,pageSize: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Picklists/Products`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const get_product_conditions = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/ProductConditions`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const get_product_conditions_id = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/ProductConditions/${path.id}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const get_product_image = async (
    base_url: string, 
    token: string,   
    query: {productID: string},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/ProductImage`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const post_product_image = async (
    base_url: string, 
    token: string,  
    body: {ProductID?: string, Content?: string, FileName?: string, Caption?: string, Properties?: undefined, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/ProductImage`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_product_image_id = async (
    base_url: string, 
    token: string, 
    path: {id: string},  
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/ProductImage/${path.id}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const delete_product_image_id = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'DELETE', 
        url: `${base_url}/api/ProductImage/${path.id}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const post_product_image_get_products_images = async (
    base_url: string, 
    token: string,  
    body: {ProductsIDs?: Array<string>, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/ProductImage/GetProductsImages`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const post_products = async (
    base_url: string, 
    token: string,  
    body: {CompanyId?: number, ProductName: string, ProductSKU: string, ProductTypeName: string, PurchaserId?: number, SiteCost?: number, DefaultPrice?: number, ManufacturerId?: number, AutoAssignUPC?: boolean, UPC?: string, ProductNotes?: string, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Products`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_products_id_custom_columns = async (
    base_url: string, 
    token: string, 
    path: {id: string},  
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Products/${path.id}/CustomColumns`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const put_products_id_custom_columns = async (
    base_url: string, 
    token: string, 
    path: {id: string}, 
    body: {ColumnName: string, Value?: {}, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Products/${path.id}/CustomColumns`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_products_custom_columns = async (
    base_url: string, 
    token: string,   
    query: {productID: string},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Products/CustomColumns`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const put_products_custom_columns = async (
    base_url: string, 
    token: string,  
    body: {ProductID: string, CustomColumns?: Array<{ColumnName: string, Value?: {}, }>, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Products/CustomColumns`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const put_products_id_custom_columns_multiple = async (
    base_url: string, 
    token: string, 
    path: {id: string}, 
    body: {ColumnName: string, Value?: {}, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Products/${path.id}/CustomColumnsMultiple`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_purchase_orders_id_items = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/PurchaseOrders/${path.id}/Items`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const put_purchase_orders_id_items = async (
    base_url: string, 
    token: string, 
    path: {id: number}, 
    body: {Items: Array<{ID: number, QtyUnitsOrdered?: number, UnitPrice?: number, QtyCasesOrdered?: number, QtyUnitsPerCase?: number, CasePrice?: number, ExpectedDeliveryDate?: string, }>, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/PurchaseOrders/${path.id}/Items`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const post_purchase_orders_id_items = async (
    base_url: string, 
    token: string, 
    path: {id: number}, 
    body: {ProductID: string, QtyUnitsOrdered?: number, UnitPrice?: number, QtyCasesOrdered?: number, QtyUnitsPerCase?: number, CasePrice?: number, DiscountType?: number, DiscountValue?: number, WarehouseID?: number, ItemNotes?: string, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/PurchaseOrders/${path.id}/items`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const post_purchase_orders_id_receive = async (
    base_url: string, 
    token: string, 
    path: {id: number}, 
    body: {ReceiveInvoiceNumber?: string, VendorOrderId?: string, ShippingCost?: number, Items: Array<{ID: number, QtyToReceive?: number, CaseQtyToReceive?: number, WarehouseId?: number, WarehouseBinId?: number, UnitPrice?: number, DiscountValue?: number, DiscountType?: number, LocationNotes?: string, ListPrice?: number, UPC?: string, WeightLbs?: number, WeightOz?: number, }>, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/PurchaseOrders/${path.id}/receive`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_purchase_orders_id_custom_columns = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/PurchaseOrders/${path.id}/CustomColumns`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const put_purchase_orders_id_custom_columns = async (
    base_url: string, 
    token: string, 
    path: {id: number}, 
    body: {ColumnName: string, Value?: {}, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/PurchaseOrders/${path.id}/CustomColumns`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const put_purchase_orders_set_quick_book_status = async (
    base_url: string, 
    token: string,  
    body: {PurchaseIDs?: Array<number>, Exported?: boolean, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/PurchaseOrders/SetQuickBookStatus`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_purchase_orders_serials = async (
    base_url: string, 
    token: string,   
    query: {id: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/PurchaseOrders/Serials`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const get_purchase_orders = async (
    base_url: string, 
    token: string,   
    query: {pOIds?: Array<number>,companyIDList?: Array<number>,pOStatuses?: Array<number>,receiveWarehouseID?: Array<number>,shippingStatuses?: Array<number>,receivedStatuses?: Array<number>,createDateFrom?: string,createDateTo?: string,paymentStatus?: Array<number>,inventoryCountEnabled?: number,vendorInvoiced?: number,approved?: number,receiveDateFrom?: string,receiveDateTo?: string,updatedDateFrom?: string,updatedDateTo?: string,keyword?: string,qBExported?: number,pageNumber?: number,pageSize?: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/PurchaseOrders`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const post_purchase_orders = async (
    base_url: string, 
    token: string,  
    body: {CompanyID: number, VendorID: number, POType: number, CaseQtyMode: boolean, DefaultWarehouseID?: number, Description?: string, VendorNote?: string, PaymentTermID?: number, ExpectedDeliveryDate?: string, Products: Array<{ProductID: string, QtyUnitsOrdered?: number, UnitPrice?: number, QtyCasesOrdered?: number, QtyUnitsPerCase?: number, CasePrice?: number, DiscountType?: number, DiscountValue?: number, WarehouseID?: number, ItemNotes?: string, }>, BillingAddress?: undefined, ShippingAddress?: undefined, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/PurchaseOrders`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_purchase_orders_id = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/PurchaseOrders/${path.id}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const delete_purchase_orders_id = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'DELETE', 
        url: `${base_url}/api/PurchaseOrders/${path.id}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const get_purchase_orders_import_download_purchase_orders_template = async (
    base_url: string, 
    token: string,   
    query: {fileFormat: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/PurchaseOrders/Import/DownloadPurchaseOrdersTemplate`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const get_purchase_orders_import_download_vendor_prices_template = async (
    base_url: string, 
    token: string,   
    query: {fileFormat: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/PurchaseOrders/Import/DownloadVendorPricesTemplate`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const post_purchase_orders_import_import_purchase_orders = async (
    base_url: string, 
    token: string,  
    body: {Metadata: undefined, FileContents: string, Format?: number, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/PurchaseOrders/Import/ImportPurchaseOrders`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const post_purchase_orders_import_import_vendor_prices = async (
    base_url: string, 
    token: string,  
    body: {Metadata: undefined, FileContents: string, Format?: number, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/PurchaseOrders/Import/ImportVendorPrices`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_queued_jobs_id = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/QueuedJobs/${path.id}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const get_queued_jobs_output_file = async (
    base_url: string, 
    token: string,   
    query: {id: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/QueuedJobs/OutputFile`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const put_queued_jobs_priority = async (
    base_url: string, 
    token: string,  
    body: {ID?: number, Priority?: number, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/QueuedJobs/Priority`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_queued_jobs_bulk_update_log_id = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/QueuedJobs/BulkUpdateLog/${path.id}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const put_queued_jobs_cancel = async (
    base_url: string, 
    token: string,   
    query: {id: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/QueuedJobs/Cancel`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const get_queued_jobs = async (
    base_url: string, 
    token: string,   
    query: {jobID?: number,jobType?: Array<number>,submittedBy?: number,jobStatuses?: Array<number>,companyIDList?: Array<number>,submittedFrom?: string,submittedTo?: string,queuedJobPriorities?: Array<number>,pageNumber?: number,pageSize?: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/QueuedJobs`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const get_rma_get_all_by_view = async (
    base_url: string, 
    token: string,   
    query: {viewID: number,pageNumber: number,pageSize: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Rma/GetAllByView`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const post_rma_id_receive = async (
    base_url: string, 
    token: string, 
    path: {id: number}, 
    body: {Items?: Array<{RmaItemID: number, QtyToReceive: number, WarehouseID: number, WarehouseBinID?: number, }>, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Rma/${path.id}/Receive`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const post_rma_id_resolution = async (
    base_url: string, 
    token: string, 
    path: {id: number}, 
    body: {ResolutionType: number, Comment: string, Items: Array<{RmaItemID: number, ReplacementSKU?: string, RefundAmount?: number, }>, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Rma/${path.id}/Resolution`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_rma_return_reasons = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Rma/ReturnReasons`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const get_rma_id_shipping_labels = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Rma/${path.id}/ShippingLabels`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const post_rma_id_shipping_labels = async (
    base_url: string, 
    token: string, 
    path: {id: number}, 
    body: {Weight: undefined, Dimensions: undefined, ShippingCarrier?: string, ShippingService?: number, PackageType?: string, InsuranceProvider?: string, InsuranceAmount?: number, DeliveryConfirmation?: number, ShipFromAddress?: undefined, ShipToAddress?: undefined, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Rma/${path.id}/ShippingLabels`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_rma_id_shipping_labels_carriers = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Rma/${path.id}/ShippingLabels/Carriers`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const get_rma_id_shipping_labels_services = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    query: {shippingCarrier: string},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Rma/${path.id}/ShippingLabels/Services`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const get_rma_id_shipping_labels_package_types = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    query: {shippingCarrier: string},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Rma/${path.id}/ShippingLabels/PackageTypes`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const get_rma_id_shipping_labels_insurance_providers = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    query: {shippingCarrier: string},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Rma/${path.id}/ShippingLabels/InsuranceProviders`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const get_rma_id_shipping_labels_label_id = async (
    base_url: string, 
    token: string, 
    path: {id: number,labelId: number},  
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Rma/${path.id}/ShippingLabels/${path.labelId}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const post_rma_id_notes = async (
    base_url: string, 
    token: string, 
    path: {id: number}, 
    body: {Category: number, Message: string, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Rma/${path.id}/Notes`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_rma_views = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Rma/Views`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const get_rma_id_custom_columns = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Rma/${path.id}/CustomColumns`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const put_rma_id_custom_columns = async (
    base_url: string, 
    token: string, 
    path: {id: number}, 
    body: {ColumnName: string, Value?: {}, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Rma/${path.id}/CustomColumns`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_rma_id_items = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Rma/${path.id}/Items`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const put_rma_id_items = async (
    base_url: string, 
    token: string, 
    path: {id: number}, 
    body: {ID?: number, QtyReturned?: number, ReturnReason?: number, ProblemDescription?: string, ApprovalStatus?: number, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Rma/${path.id}/Items`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const post_rma_id_items = async (
    base_url: string, 
    token: string, 
    path: {id: number}, 
    body: {OrderID?: number, OrderItemID?: number, KitItemProductID?: string, QtyReturned?: number, ReturnReason?: number, ProblemDescription?: string, ApprovalStatus?: number, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Rma/${path.id}/Items`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_rma = async (
    base_url: string, 
    token: string,   
    query: {rMAIDs?: Array<number>,orderIDs?: Array<number>,companyIDList?: Array<number>,productID?: Array<string>,rmaStatuses?: Array<number>,orderSources?: Array<number>,orderSourceRMAID?: string,orderSourceOrderIDs?: Array<string>,dateFrom?: string,dateTo?: string,closedOnFrom?: string,closedOnTo?: string,returnedOnFrom?: string,returnedOnTo?: string,lastUpdatedOnFrom?: string,lastUpdatedOnTo?: string,pageNumber?: number,pageSize?: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Rma`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const post_rma = async (
    base_url: string, 
    token: string,  
    body: {OrderID: number, OrderItems: Array<{OrderItemID: number, QtyToReturn?: number, ReasonID?: number, Description?: string, BundleItems?: Array<{ProductID: string, QtyToReturn: number, ReasonID: number, Description?: string, }>, }>, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Rma`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_rma_id = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Rma/${path.id}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const put_rma_id = async (
    base_url: string, 
    token: string, 
    path: {id: number}, 
    body: {Status?: number, TrackingNumber?: string, IsExported?: boolean, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Rma/${path.id}`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_scheduled_tasks_id_execution_history = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    query: {pageNumber: number,pageSize: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/ScheduledTasks/${path.id}/ExecutionHistory`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const post_scheduled_tasks_id_execute_task = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/ScheduledTasks/${path.id}/ExecuteTask`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const get_settings_payment_terms = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Settings/PaymentTerms`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const get_settings_manufacturers = async (
    base_url: string, 
    token: string,   
    query: {companyId: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Settings/Manufacturers`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const get_settings_brands = async (
    base_url: string, 
    token: string,   
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Settings/Brands`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const get_vendors_id_products = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    query: {productSKU?: string,vendorSKU?: string,pageNumber?: number,pageSize?: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Vendors/${path.id}/products`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const put_vendors_vendor_id_products_product_sku = async (
    base_url: string, 
    token: string, 
    path: {vendorId: number,productSKU: string}, 
    body: {Price?: number, PricePerCase?: number, QtyPerCase?: number, IsAvailable?: boolean, Qty?: number, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Vendors/${path.vendorId}/products/${path.productSKU}`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const put_vendors_vendor_id_products = async (
    base_url: string, 
    token: string, 
    path: {vendorId: number}, 
    body: {ProductID: string, VendorSKU?: string, Notes?: string, Price?: number, PricePerCase?: number, QtyPerCase?: number, IsAvailable?: boolean, Qty?: number, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'PUT', 
        url: `${base_url}/api/Vendors/${path.vendorId}/products`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const post_vendors_vendor_id_products = async (
    base_url: string, 
    token: string, 
    path: {vendorId: number}, 
    body: {VendorProducts?: Array<{ProductSKU?: string, Price?: number, VendorSKU?: string, IsAvailable?: boolean, Notes?: string, PricePerCase?: number, QtyPerCase?: number, Qty?: number, }>, }, 
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'POST', 
        url: `${base_url}/api/Vendors/${path.vendorId}/products`,
        headers: { Authorization: `Bearer ${ token }` },
        data: body,
    })
}

export const get_vendors_id = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Vendors/${path.id}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const get_vendors = async (
    base_url: string, 
    token: string,   
    query: {vendorIDs?: Array<number>,names?: Array<string>,email?: string,activeStatus?: number,pageNumber?: number,pageSize?: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Vendors`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}

export const get_warehouses_id = async (
    base_url: string, 
    token: string, 
    path: {id: number},  
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Warehouses/${path.id}`,
        headers: { Authorization: `Bearer ${ token }` },
    })
}

export const get_warehouses = async (
    base_url: string, 
    token: string,   
    query: {warehouseIds?: Array<number>,warehouseType?: number,name?: string,isDefault?: number,isSellable?: number,pageNumber?: number,pageSize?: number},
    axios: Function
): Promise<{data: any}> => {
    return axios({
        method: 'GET', 
        url: `${base_url}/api/Warehouses`,
        headers: { Authorization: `Bearer ${ token }` },
        params: query,
    })
}