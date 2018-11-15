/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/applianceDefinitionsMappers";
import * as Parameters from "../models/parameters";
import { ManagedApplicationClientContext } from "../managedApplicationClientContext";

/** Class representing a ApplianceDefinitions. */
export class ApplianceDefinitions {
  private readonly client: ManagedApplicationClientContext;

  /**
   * Create a ApplianceDefinitions.
   * @param {ManagedApplicationClientContext} client Reference to the service client.
   */
  constructor(client: ManagedApplicationClientContext) {
    this.client = client;
  }

  /**
   * Gets the appliance definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applianceDefinitionName The name of the appliance definition.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplianceDefinitionsGetResponse>
   */
  get(resourceGroupName: string, applianceDefinitionName: string, options?: msRest.RequestOptionsBase): Promise<Models.ApplianceDefinitionsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applianceDefinitionName The name of the appliance definition.
   * @param callback The callback
   */
  get(resourceGroupName: string, applianceDefinitionName: string, callback: msRest.ServiceCallback<Models.ApplianceDefinition>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applianceDefinitionName The name of the appliance definition.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, applianceDefinitionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplianceDefinition>): void;
  get(resourceGroupName: string, applianceDefinitionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplianceDefinition>, callback?: msRest.ServiceCallback<Models.ApplianceDefinition>): Promise<Models.ApplianceDefinitionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        applianceDefinitionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ApplianceDefinitionsGetResponse>;
  }

  /**
   * Deletes the appliance definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applianceDefinitionName The name of the appliance definition to delete.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, applianceDefinitionName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,applianceDefinitionName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Creates a new appliance definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applianceDefinitionName The name of the appliance definition.
   * @param parameters Parameters supplied to the create or update an appliance definition.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplianceDefinitionsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, applianceDefinitionName: string, parameters: Models.ApplianceDefinition, options?: msRest.RequestOptionsBase): Promise<Models.ApplianceDefinitionsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,applianceDefinitionName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ApplianceDefinitionsCreateOrUpdateResponse>;
  }

  /**
   * Lists the appliance definitions in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplianceDefinitionsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.ApplianceDefinitionsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ApplianceDefinitionListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplianceDefinitionListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplianceDefinitionListResult>, callback?: msRest.ServiceCallback<Models.ApplianceDefinitionListResult>): Promise<Models.ApplianceDefinitionsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.ApplianceDefinitionsListByResourceGroupResponse>;
  }

  /**
   * Gets the appliance definition.
   * @param applianceDefinitionId The fully qualified ID of the appliance definition, including the
   * appliance name and the appliance definition resource type. Use the format,
   * /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applianceDefinitions/{applianceDefinition-name}
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplianceDefinitionsGetByIdResponse>
   */
  getById(applianceDefinitionId: string, options?: msRest.RequestOptionsBase): Promise<Models.ApplianceDefinitionsGetByIdResponse>;
  /**
   * @param applianceDefinitionId The fully qualified ID of the appliance definition, including the
   * appliance name and the appliance definition resource type. Use the format,
   * /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applianceDefinitions/{applianceDefinition-name}
   * @param callback The callback
   */
  getById(applianceDefinitionId: string, callback: msRest.ServiceCallback<Models.ApplianceDefinition>): void;
  /**
   * @param applianceDefinitionId The fully qualified ID of the appliance definition, including the
   * appliance name and the appliance definition resource type. Use the format,
   * /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applianceDefinitions/{applianceDefinition-name}
   * @param options The optional parameters
   * @param callback The callback
   */
  getById(applianceDefinitionId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplianceDefinition>): void;
  getById(applianceDefinitionId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplianceDefinition>, callback?: msRest.ServiceCallback<Models.ApplianceDefinition>): Promise<Models.ApplianceDefinitionsGetByIdResponse> {
    return this.client.sendOperationRequest(
      {
        applianceDefinitionId,
        options
      },
      getByIdOperationSpec,
      callback) as Promise<Models.ApplianceDefinitionsGetByIdResponse>;
  }

  /**
   * Deletes the appliance definition.
   * @param applianceDefinitionId The fully qualified ID of the appliance definition, including the
   * appliance name and the appliance definition resource type. Use the format,
   * /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applianceDefinitions/{applianceDefinition-name}
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteById(applianceDefinitionId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteById(applianceDefinitionId,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Creates a new appliance definition.
   * @param applianceDefinitionId The fully qualified ID of the appliance definition, including the
   * appliance name and the appliance definition resource type. Use the format,
   * /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applianceDefinitions/{applianceDefinition-name}
   * @param parameters Parameters supplied to the create or update an appliance definition.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplianceDefinitionsCreateOrUpdateByIdResponse>
   */
  createOrUpdateById(applianceDefinitionId: string, parameters: Models.ApplianceDefinition, options?: msRest.RequestOptionsBase): Promise<Models.ApplianceDefinitionsCreateOrUpdateByIdResponse> {
    return this.beginCreateOrUpdateById(applianceDefinitionId,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ApplianceDefinitionsCreateOrUpdateByIdResponse>;
  }

  /**
   * Deletes the appliance definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applianceDefinitionName The name of the appliance definition to delete.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, applianceDefinitionName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        applianceDefinitionName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Creates a new appliance definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applianceDefinitionName The name of the appliance definition.
   * @param parameters Parameters supplied to the create or update an appliance definition.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, applianceDefinitionName: string, parameters: Models.ApplianceDefinition, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        applianceDefinitionName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes the appliance definition.
   * @param applianceDefinitionId The fully qualified ID of the appliance definition, including the
   * appliance name and the appliance definition resource type. Use the format,
   * /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applianceDefinitions/{applianceDefinition-name}
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteById(applianceDefinitionId: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        applianceDefinitionId,
        options
      },
      beginDeleteByIdOperationSpec,
      options);
  }

  /**
   * Creates a new appliance definition.
   * @param applianceDefinitionId The fully qualified ID of the appliance definition, including the
   * appliance name and the appliance definition resource type. Use the format,
   * /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applianceDefinitions/{applianceDefinition-name}
   * @param parameters Parameters supplied to the create or update an appliance definition.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdateById(applianceDefinitionId: string, parameters: Models.ApplianceDefinition, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        applianceDefinitionId,
        parameters,
        options
      },
      beginCreateOrUpdateByIdOperationSpec,
      options);
  }

  /**
   * Lists the appliance definitions in a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ApplianceDefinitionsListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ApplianceDefinitionsListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ApplianceDefinitionListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplianceDefinitionListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplianceDefinitionListResult>, callback?: msRest.ServiceCallback<Models.ApplianceDefinitionListResult>): Promise<Models.ApplianceDefinitionsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.ApplianceDefinitionsListByResourceGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applianceDefinitions/{applianceDefinitionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.applianceDefinitionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplianceDefinition
    },
    404: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applianceDefinitions",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplianceDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getByIdOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{applianceDefinitionId}",
  urlParameters: [
    Parameters.applianceDefinitionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplianceDefinition
    },
    404: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applianceDefinitions/{applianceDefinitionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.applianceDefinitionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applianceDefinitions/{applianceDefinitionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.applianceDefinitionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ApplianceDefinition,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ApplianceDefinition
    },
    201: {
      bodyMapper: Mappers.ApplianceDefinition
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginDeleteByIdOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "{applianceDefinitionId}",
  urlParameters: [
    Parameters.applianceDefinitionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginCreateOrUpdateByIdOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "{applianceDefinitionId}",
  urlParameters: [
    Parameters.applianceDefinitionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ApplianceDefinition,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ApplianceDefinition
    },
    201: {
      bodyMapper: Mappers.ApplianceDefinition
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplianceDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
