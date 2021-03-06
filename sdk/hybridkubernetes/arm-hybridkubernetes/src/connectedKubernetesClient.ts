/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { ConnectedKubernetesClientContext } from "./connectedKubernetesClientContext";


class ConnectedKubernetesClient extends ConnectedKubernetesClientContext {
  // Operation groups
  connectedCluster: operations.ConnectedClusterOperations;
  operations: operations.Operations;

  /**
   * Initializes a new instance of the ConnectedKubernetesClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The ID of the target subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.ConnectedKubernetesClientOptions) {
    super(credentials, subscriptionId, options);
    this.connectedCluster = new operations.ConnectedClusterOperations(this);
    this.operations = new operations.Operations(this);
  }
}

// Operation Specifications

export {
  ConnectedKubernetesClient,
  ConnectedKubernetesClientContext,
  Models as ConnectedKubernetesModels,
  Mappers as ConnectedKubernetesMappers
};
export * from "./operations";
