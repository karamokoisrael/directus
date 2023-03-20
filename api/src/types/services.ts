import { Knex } from 'knex';
import { SchemaOverview } from '../types';
import { Accountability } from '@directus/shared/types';
import { Item, PrimaryKey } from './items';
import { Query } from '@directus/shared/types';
import { MailService, GraphQLService, ActivityService, AssetsService, AuthenticationService, CollectionsService, DashboardsService, FieldsService, FilesService, FoldersService, ImportService, ItemsService, MetaService, NotificationsService, PanelsService, PayloadService, PermissionsService, PresetsService, RelationsService, RevisionsService, RolesService, ServerService, SettingsService, SpecificationService, TFAService, UsersService, UtilsService, WebhooksService } from '../services';
import { AuthorizationService } from '../services/authorization';

export type AbstractServiceOptions = {
	knex?: Knex;
	accountability?: Accountability | null;
	schema: SchemaOverview;
};

export interface AbstractService {
	knex: Knex;
	accountability: Accountability | null;

	createOne(data: Partial<Item>): Promise<PrimaryKey>;
	createMany(data: Partial<Item>[]): Promise<PrimaryKey[]>;

	readOne(key: PrimaryKey, query?: Query): Promise<Item>;
	readMany(keys: PrimaryKey[], query?: Query): Promise<Item[]>;
	readByQuery(query: Query): Promise<Item[]>;

	updateOne(key: PrimaryKey, data: Partial<Item>): Promise<PrimaryKey>;
	updateMany(keys: PrimaryKey[], data: Partial<Item>): Promise<PrimaryKey[]>;

	deleteOne(key: PrimaryKey): Promise<PrimaryKey>;
	deleteMany(keys: PrimaryKey[]): Promise<PrimaryKey[]>;
}

export interface Services {
	MailService: typeof MailService;
	GraphQLService: typeof GraphQLService;
	ActivityService: typeof ActivityService;
	AssetsService: typeof AssetsService;
	AuthenticationService: typeof AuthenticationService;
	AuthorizationService: typeof AuthorizationService;
	CollectionsService: typeof CollectionsService;
	DashboardsService: typeof DashboardsService;
	FieldsService: typeof FieldsService;
	FilesService: typeof FilesService;
	// FlowsService: typeof FlowsService;
	FoldersService: typeof FoldersService;
	ImportService: typeof ImportService;
	// ExportService: typeof ExportService;
	ItemsService: typeof ItemsService;
	MetaService: typeof MetaService;
	NotificationsService: typeof NotificationsService;
	// OperationsService: typeof OperationsService;
	PanelsService: typeof PanelsService;
	PayloadService: typeof PayloadService;
	PermissionsService: typeof PermissionsService;
	PresetsService: typeof PresetsService;
	RelationsService: typeof RelationsService;
	RevisionsService: typeof RevisionsService;
	RolesService: typeof RolesService;
	// SchemaService: typeof SchemaService;
	ServerService: typeof ServerService;
	SettingsService: typeof SettingsService;
	// SharesService: typeof SharesService;
	SpecificationService: typeof SpecificationService;
	TFAService: typeof TFAService;
	UsersService: typeof UsersService;
	UtilsService: typeof UtilsService;
	WebhooksService: typeof WebhooksService;
}