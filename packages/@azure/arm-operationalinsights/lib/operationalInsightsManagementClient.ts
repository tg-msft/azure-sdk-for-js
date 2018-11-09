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
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { OperationalInsightsManagementClientContext } from "./operationalInsightsManagementClientContext";


class OperationalInsightsManagementClient extends OperationalInsightsManagementClientContext {
  // Operation groups
  storageInsights: operations.StorageInsights;
  workspaces: operations.Workspaces;
  savedSearches: operations.SavedSearches;
  operations: operations.Operations;

  /**
   * Initializes a new instance of the OperationalInsightsManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The Subscription ID.
   * @param purgeId In a purge status request, this is the Id of the operation the status of which is
   * returned.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, purgeId: string, options?: Models.OperationalInsightsManagementClientOptions) {
    super(credentials, subscriptionId, purgeId, options);
    this.storageInsights = new operations.StorageInsights(this);
    this.workspaces = new operations.Workspaces(this);
    this.savedSearches = new operations.SavedSearches(this);
    this.operations = new operations.Operations(this);
  }
}

// Operation Specifications

export {
  OperationalInsightsManagementClient,
  OperationalInsightsManagementClientContext,
  Models as OperationalInsightsManagementModels,
  Mappers as OperationalInsightsManagementMappers
};
export * from "./operations";
