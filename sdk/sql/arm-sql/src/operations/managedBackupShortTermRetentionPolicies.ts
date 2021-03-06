/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/managedBackupShortTermRetentionPoliciesMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a ManagedBackupShortTermRetentionPolicies. */
export class ManagedBackupShortTermRetentionPolicies {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a ManagedBackupShortTermRetentionPolicies.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a managed database's short term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedBackupShortTermRetentionPoliciesGetResponse>
   */
  get(resourceGroupName: string, managedInstanceName: string, databaseName: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagedBackupShortTermRetentionPoliciesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param callback The callback
   */
  get(resourceGroupName: string, managedInstanceName: string, databaseName: string, callback: msRest.ServiceCallback<Models.ManagedBackupShortTermRetentionPolicy>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, managedInstanceName: string, databaseName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagedBackupShortTermRetentionPolicy>): void;
  get(resourceGroupName: string, managedInstanceName: string, databaseName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ManagedBackupShortTermRetentionPolicy>, callback?: msRest.ServiceCallback<Models.ManagedBackupShortTermRetentionPolicy>): Promise<Models.ManagedBackupShortTermRetentionPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ManagedBackupShortTermRetentionPoliciesGetResponse>;
  }

  /**
   * Updates a managed database's short term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param parameters The short term retention policy info.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedBackupShortTermRetentionPoliciesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, managedInstanceName: string, databaseName: string, parameters: Models.ManagedBackupShortTermRetentionPolicy, options?: msRest.RequestOptionsBase): Promise<Models.ManagedBackupShortTermRetentionPoliciesCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,managedInstanceName,databaseName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ManagedBackupShortTermRetentionPoliciesCreateOrUpdateResponse>;
  }

  /**
   * Updates a managed database's short term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param parameters The short term retention policy info.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedBackupShortTermRetentionPoliciesUpdateResponse>
   */
  update(resourceGroupName: string, managedInstanceName: string, databaseName: string, parameters: Models.ManagedBackupShortTermRetentionPolicy, options?: msRest.RequestOptionsBase): Promise<Models.ManagedBackupShortTermRetentionPoliciesUpdateResponse> {
    return this.beginUpdate(resourceGroupName,managedInstanceName,databaseName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ManagedBackupShortTermRetentionPoliciesUpdateResponse>;
  }

  /**
   * Gets a managed database's short term retention policy list.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedBackupShortTermRetentionPoliciesListByDatabaseResponse>
   */
  listByDatabase(resourceGroupName: string, managedInstanceName: string, databaseName: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagedBackupShortTermRetentionPoliciesListByDatabaseResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param callback The callback
   */
  listByDatabase(resourceGroupName: string, managedInstanceName: string, databaseName: string, callback: msRest.ServiceCallback<Models.ManagedBackupShortTermRetentionPolicyListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByDatabase(resourceGroupName: string, managedInstanceName: string, databaseName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagedBackupShortTermRetentionPolicyListResult>): void;
  listByDatabase(resourceGroupName: string, managedInstanceName: string, databaseName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ManagedBackupShortTermRetentionPolicyListResult>, callback?: msRest.ServiceCallback<Models.ManagedBackupShortTermRetentionPolicyListResult>): Promise<Models.ManagedBackupShortTermRetentionPoliciesListByDatabaseResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        options
      },
      listByDatabaseOperationSpec,
      callback) as Promise<Models.ManagedBackupShortTermRetentionPoliciesListByDatabaseResponse>;
  }

  /**
   * Updates a managed database's short term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param parameters The short term retention policy info.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, managedInstanceName: string, databaseName: string, parameters: Models.ManagedBackupShortTermRetentionPolicy, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Updates a managed database's short term retention policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param parameters The short term retention policy info.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, managedInstanceName: string, databaseName: string, parameters: Models.ManagedBackupShortTermRetentionPolicy, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        parameters,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Gets a managed database's short term retention policy list.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedBackupShortTermRetentionPoliciesListByDatabaseNextResponse>
   */
  listByDatabaseNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagedBackupShortTermRetentionPoliciesListByDatabaseNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByDatabaseNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ManagedBackupShortTermRetentionPolicyListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByDatabaseNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagedBackupShortTermRetentionPolicyListResult>): void;
  listByDatabaseNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ManagedBackupShortTermRetentionPolicyListResult>, callback?: msRest.ServiceCallback<Models.ManagedBackupShortTermRetentionPolicyListResult>): Promise<Models.ManagedBackupShortTermRetentionPoliciesListByDatabaseNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByDatabaseNextOperationSpec,
      callback) as Promise<Models.ManagedBackupShortTermRetentionPoliciesListByDatabaseNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/backupShortTermRetentionPolicies/{policyName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.databaseName,
    Parameters.policyName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ManagedBackupShortTermRetentionPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByDatabaseOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/backupShortTermRetentionPolicies",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.databaseName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ManagedBackupShortTermRetentionPolicyListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/backupShortTermRetentionPolicies/{policyName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.databaseName,
    Parameters.policyName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ManagedBackupShortTermRetentionPolicy,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ManagedBackupShortTermRetentionPolicy
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/backupShortTermRetentionPolicies/{policyName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.databaseName,
    Parameters.policyName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.ManagedBackupShortTermRetentionPolicy,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ManagedBackupShortTermRetentionPolicy
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByDatabaseNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.ManagedBackupShortTermRetentionPolicyListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
