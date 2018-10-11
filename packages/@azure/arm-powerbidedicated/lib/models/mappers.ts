/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "ms-rest-azure-js";
import * as msRest from "ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const OperationDisplay: msRest.CompositeMapper = {
  serializedName: "Operation_display",
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        readOnly: true,
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        readOnly: true,
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        readOnly: true,
        serializedName: "operation",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: msRest.CompositeMapper = {
  serializedName: "Operation",
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        readOnly: true,
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

export const ResourceSku: msRest.CompositeMapper = {
  serializedName: "ResourceSku",
  type: {
    name: "Composite",
    className: "ResourceSku",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      tier: {
        serializedName: "tier",
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
      name: {
        readOnly: true,
        serializedName: "name",
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
      location: {
        required: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      sku: {
        required: true,
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "ResourceSku"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const DedicatedCapacityMutableProperties: msRest.CompositeMapper = {
  serializedName: "DedicatedCapacityMutableProperties",
  type: {
    name: "Composite",
    className: "DedicatedCapacityMutableProperties",
    modelProperties: {
      administration: {
        serializedName: "administration",
        type: {
          name: "Composite",
          className: "DedicatedCapacityAdministrators"
        }
      }
    }
  }
};

export const DedicatedCapacityProperties: msRest.CompositeMapper = {
  serializedName: "DedicatedCapacityProperties",
  type: {
    name: "Composite",
    className: "DedicatedCapacityProperties",
    modelProperties: {
      ...DedicatedCapacityMutableProperties.type.modelProperties,
      state: {
        readOnly: true,
        serializedName: "state",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DedicatedCapacity: msRest.CompositeMapper = {
  serializedName: "DedicatedCapacity",
  type: {
    name: "Composite",
    className: "DedicatedCapacity",
    modelProperties: {
      ...Resource.type.modelProperties,
      administration: {
        serializedName: "properties.administration",
        type: {
          name: "Composite",
          className: "DedicatedCapacityAdministrators"
        }
      },
      state: {
        readOnly: true,
        serializedName: "properties.state",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DedicatedCapacityAdministrators: msRest.CompositeMapper = {
  serializedName: "DedicatedCapacityAdministrators",
  type: {
    name: "Composite",
    className: "DedicatedCapacityAdministrators",
    modelProperties: {
      members: {
        serializedName: "members",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const DedicatedCapacityUpdateParameters: msRest.CompositeMapper = {
  serializedName: "DedicatedCapacityUpdateParameters",
  type: {
    name: "Composite",
    className: "DedicatedCapacityUpdateParameters",
    modelProperties: {
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "ResourceSku"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      administration: {
        serializedName: "properties.administration",
        type: {
          name: "Composite",
          className: "DedicatedCapacityAdministrators"
        }
      }
    }
  }
};

export const SkuEnumerationForNewResourceResult: msRest.CompositeMapper = {
  serializedName: "SkuEnumerationForNewResourceResult",
  type: {
    name: "Composite",
    className: "SkuEnumerationForNewResourceResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceSku"
            }
          }
        }
      }
    }
  }
};

export const SkuDetailsForExistingResource: msRest.CompositeMapper = {
  serializedName: "SkuDetailsForExistingResource",
  type: {
    name: "Composite",
    className: "SkuDetailsForExistingResource",
    modelProperties: {
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "ResourceSku"
        }
      }
    }
  }
};

export const SkuEnumerationForExistingResourceResult: msRest.CompositeMapper = {
  serializedName: "SkuEnumerationForExistingResourceResult",
  type: {
    name: "Composite",
    className: "SkuEnumerationForExistingResourceResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SkuDetailsForExistingResource"
            }
          }
        }
      }
    }
  }
};

export const ErrorResponse: msRest.CompositeMapper = {
  serializedName: "ErrorResponse",
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CheckCapacityNameAvailabilityParameters: msRest.CompositeMapper = {
  serializedName: "CheckCapacityNameAvailabilityParameters",
  type: {
    name: "Composite",
    className: "CheckCapacityNameAvailabilityParameters",
    modelProperties: {
      name: {
        serializedName: "name",
        constraints: {
          MaxLength: 63,
          MinLength: 3,
          Pattern: /^[a-z][a-z0-9]*$/
        },
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        defaultValue: 'Microsoft.PowerBIDedicated/capacities',
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CheckCapacityNameAvailabilityResult: msRest.CompositeMapper = {
  serializedName: "CheckCapacityNameAvailabilityResult",
  type: {
    name: "Composite",
    className: "CheckCapacityNameAvailabilityResult",
    modelProperties: {
      nameAvailable: {
        serializedName: "nameAvailable",
        type: {
          name: "Boolean"
        }
      },
      reason: {
        serializedName: "reason",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DedicatedCapacities: msRest.CompositeMapper = {
  serializedName: "DedicatedCapacities",
  type: {
    name: "Composite",
    className: "DedicatedCapacities",
    modelProperties: {
      value: {
        required: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DedicatedCapacity"
            }
          }
        }
      }
    }
  }
};

export const OperationListResult: msRest.CompositeMapper = {
  serializedName: "OperationListResult",
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        readOnly: true,
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
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};
