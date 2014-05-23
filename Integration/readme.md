The SuiteTalk Schema Browser provides schema details for SuiteTalk operations, faults, records, sublists, and platform enumerations. The schemas in this browser are organized as follows:

Platform
*
core.xsd - core-level objects shared across all other XSDs
*
faults.xsd - all SOAP faults that can be thrown for each supported operation
*
messages.xsd - request and response objects used by WSDL to interface with SuiteTalk schema
Shared
*
common.xsd - all <record>SearchBasic search records. These records list all search filter fields available to each NetSuite business record.
Records
*
Links to all NetSuite business record XSDs. Note that all of the links have an associated [types] link to the right. Clicking the [types] link will display all the record’s associated enum types in the lower-left frame.
To use the SuiteTalk Schema Browser:
1.
Click the XSD links in the upper-left frame of the Schema Browser. A list of supported records defined in each XSD will appear in the lower-left frame.
2.
In the lower-left frame, click each record to see the fields on that record. The list of fields will appear in the Schema Browser main frame. If a field is a multi-select list type, click the field's data type link to see the enumeration values for this field. The enumeration values will appear in the right frame of the Schema Browser.
3.
Schema fragments that represent business objects (records, sublists on records, searches, search joins, and system enumerations) are displayed as tables for ease of browsing, and to provide extra information on the object where available. All other schema fragments are displayed as raw XSD and are listed as “Other” objects in the lower-left frame of the Schema Browser. The true schema for all objects can be found through the WSDL at https://webservices.netsuite.com/wsdl/v2013_2_0/netsuite.wsdl

David Peter Kupratis
