// @ts-nocheck
import * as __fd_glob_33 from "../content/docs/setup/running.mdx?collection=docs"
import * as __fd_glob_32 from "../content/docs/setup/installation.mdx?collection=docs"
import * as __fd_glob_31 from "../content/docs/state-management/overview.mdx?collection=docs"
import * as __fd_glob_30 from "../content/docs/state-management/inventory.mdx?collection=docs"
import * as __fd_glob_29 from "../content/docs/security/secrets-and-access.mdx?collection=docs"
import * as __fd_glob_28 from "../content/docs/security/lgpd.mdx?collection=docs"
import * as __fd_glob_27 from "../content/docs/quality/testing-strategy.mdx?collection=docs"
import * as __fd_glob_26 from "../content/docs/quality/pr-checklist.mdx?collection=docs"
import * as __fd_glob_25 from "../content/docs/product/overview.mdx?collection=docs"
import * as __fd_glob_24 from "../content/docs/operations/release-runbook.mdx?collection=docs"
import * as __fd_glob_23 from "../content/docs/operations/incident-runbook.mdx?collection=docs"
import * as __fd_glob_22 from "../content/docs/operations/environments.mdx?collection=docs"
import * as __fd_glob_21 from "../content/docs/architecture/screens.mdx?collection=docs"
import * as __fd_glob_20 from "../content/docs/architecture/overview.mdx?collection=docs"
import * as __fd_glob_19 from "../content/docs/architecture/flows.mdx?collection=docs"
import * as __fd_glob_18 from "../content/docs/architecture/endpoints.mdx?collection=docs"
import * as __fd_glob_17 from "../content/docs/architecture/data-models.mdx?collection=docs"
import * as __fd_glob_16 from "../content/docs/architecture/components.mdx?collection=docs"
import * as __fd_glob_15 from "../content/docs/api-contracts/versioning.mdx?collection=docs"
import * as __fd_glob_14 from "../content/docs/api-contracts/overview.mdx?collection=docs"
import * as __fd_glob_13 from "../content/docs/api-contracts/inventory.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/adr/index.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/adr/adr-0001-modular-bloc.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/index.mdx?collection=docs"
import { default as __fd_glob_9 } from "../content/docs/state-management/meta.json?collection=docs"
import { default as __fd_glob_8 } from "../content/docs/setup/meta.json?collection=docs"
import { default as __fd_glob_7 } from "../content/docs/security/meta.json?collection=docs"
import { default as __fd_glob_6 } from "../content/docs/quality/meta.json?collection=docs"
import { default as __fd_glob_5 } from "../content/docs/product/meta.json?collection=docs"
import { default as __fd_glob_4 } from "../content/docs/operations/meta.json?collection=docs"
import { default as __fd_glob_3 } from "../content/docs/architecture/meta.json?collection=docs"
import { default as __fd_glob_2 } from "../content/docs/api-contracts/meta.json?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/adr/meta.json?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, "adr/meta.json": __fd_glob_1, "api-contracts/meta.json": __fd_glob_2, "architecture/meta.json": __fd_glob_3, "operations/meta.json": __fd_glob_4, "product/meta.json": __fd_glob_5, "quality/meta.json": __fd_glob_6, "security/meta.json": __fd_glob_7, "setup/meta.json": __fd_glob_8, "state-management/meta.json": __fd_glob_9, }, {"index.mdx": __fd_glob_10, "adr/adr-0001-modular-bloc.mdx": __fd_glob_11, "adr/index.mdx": __fd_glob_12, "api-contracts/inventory.mdx": __fd_glob_13, "api-contracts/overview.mdx": __fd_glob_14, "api-contracts/versioning.mdx": __fd_glob_15, "architecture/components.mdx": __fd_glob_16, "architecture/data-models.mdx": __fd_glob_17, "architecture/endpoints.mdx": __fd_glob_18, "architecture/flows.mdx": __fd_glob_19, "architecture/overview.mdx": __fd_glob_20, "architecture/screens.mdx": __fd_glob_21, "operations/environments.mdx": __fd_glob_22, "operations/incident-runbook.mdx": __fd_glob_23, "operations/release-runbook.mdx": __fd_glob_24, "product/overview.mdx": __fd_glob_25, "quality/pr-checklist.mdx": __fd_glob_26, "quality/testing-strategy.mdx": __fd_glob_27, "security/lgpd.mdx": __fd_glob_28, "security/secrets-and-access.mdx": __fd_glob_29, "state-management/inventory.mdx": __fd_glob_30, "state-management/overview.mdx": __fd_glob_31, "setup/installation.mdx": __fd_glob_32, "setup/running.mdx": __fd_glob_33, });