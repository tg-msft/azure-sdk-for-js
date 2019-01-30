/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const OperationDisplay: msRest.CompositeMapper = {
  serializedName: "operation_display",
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: msRest.CompositeMapper = {
  serializedName: "operation",
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      }
    }
  }
};

export const AlertRule: msRest.CompositeMapper = {
  serializedName: "AlertRule",
  type: {
    name: "Composite",
    polymorphicDiscriminator: {
      serializedName: "kind",
      clientName: "kind"
    },
    uberParent: "AlertRule",
    className: "AlertRule",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      kind: {
        required: true,
        serializedName: "kind",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AlertRuleKind1: msRest.CompositeMapper = {
  serializedName: "AlertRuleKind",
  type: {
    name: "Composite",
    className: "AlertRuleKind1",
    modelProperties: {
      kind: {
        serializedName: "kind",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ScheduledAlertRule: msRest.CompositeMapper = {
  serializedName: "Scheduled",
  type: {
    name: "Composite",
    polymorphicDiscriminator: AlertRule.type.polymorphicDiscriminator,
    uberParent: "AlertRule",
    className: "ScheduledAlertRule",
    modelProperties: {
      ...AlertRule.type.modelProperties,
      ruleName: {
        required: true,
        serializedName: "properties.ruleName",
        type: {
          name: "String"
        }
      },
      description: {
        required: true,
        serializedName: "properties.description",
        type: {
          name: "String"
        }
      },
      severity: {
        required: true,
        serializedName: "properties.severity",
        type: {
          name: "Enum",
          allowedValues: [
            "Low",
            "Medium",
            "High",
            "Informational"
          ]
        }
      },
      enabled: {
        required: true,
        serializedName: "properties.enabled",
        type: {
          name: "Boolean"
        }
      },
      query: {
        required: true,
        serializedName: "properties.query",
        type: {
          name: "String"
        }
      },
      queryFrequency: {
        required: true,
        serializedName: "properties.queryFrequency",
        type: {
          name: "TimeSpan"
        }
      },
      queryPeriod: {
        required: true,
        serializedName: "properties.queryPeriod",
        type: {
          name: "TimeSpan"
        }
      },
      triggerOperator: {
        required: true,
        serializedName: "properties.triggerOperator",
        type: {
          name: "Enum",
          allowedValues: [
            "GreaterThan",
            "LessThan",
            "Equal",
            "NotEqual"
          ]
        }
      },
      triggerThreshold: {
        required: true,
        serializedName: "properties.triggerThreshold",
        type: {
          name: "Number"
        }
      },
      suppressionEnabled: {
        required: true,
        serializedName: "properties.suppressionEnabled",
        type: {
          name: "Boolean"
        }
      },
      suppressionDuration: {
        required: true,
        serializedName: "properties.suppressionDuration",
        type: {
          name: "TimeSpan"
        }
      },
      lastModifiedUtc: {
        readOnly: true,
        serializedName: "properties.lastModifiedUtc",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Resource: msRest.CompositeMapper = {
  serializedName: "Resource",
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationsList: msRest.CompositeMapper = {
  serializedName: "operationsList",
  type: {
    name: "Composite",
    className: "OperationsList",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        required: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      }
    }
  }
};

export const AlertRulesList: msRest.CompositeMapper = {
  serializedName: "AlertRulesList",
  type: {
    name: "Composite",
    className: "AlertRulesList",
    modelProperties: {
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        required: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AlertRule"
            }
          }
        }
      }
    }
  }
};

export const discriminators = {
  'AlertRule' : AlertRule,
  'AlertRule.Scheduled' : ScheduledAlertRule
};
