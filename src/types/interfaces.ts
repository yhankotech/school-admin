import { 
    RelatorioProps, 
    Afiliado, 
    AfiliatesIdentificadosPorps, 
    AccountPeriodType, 
    Payment, 
    webHookDataType, 
    webHookAPILog, 
    AfliadosGroupProps,
    Paymentos, 
    TableTypeProps,
    TableReportTypeProps,
    ReferencePayments 
} from "./types";

export interface DeleteReferenceProps {
    referenceNumber: number
    referenceId: number; // ID do afiliado para exclusão
    onDelete: (id: number) => void; // Função para atualizar a tabela após exclusão
}

export interface ReferenceHeaderTableProps {
    onFilterChange: (filters: ReferencePayments) => void;
    onRefresh: () => void; // Função para atualizar a tabela
}

export interface ProductTableProp {
    payments: ReferencePayments[];
}
export interface FileterPaymentsTableProps {
  payments: Paymentos[]; 
}

export interface FileterPaymentsTableProps {
  payments: Paymentos[];
  referencia_do_servico: string | undefined;
}

export const tableHead: TableTypeProps = [
    {   id: 1,
        title:"Referências"
    },
    {   id: 2,
        title:"Montante"
    },
    {   id: 3,
        title:"Data de Processamento"
    },
    {   id: 4,
        title:"Produto"
    },
    {   id: 5,
        title:"Localidade"
    },
    {   id: 6,
        title:"Notificação"
    },
    {   id: 7,
        title:"Comprovante"
    },
    {   id: 8,
        title:"Acção"
    }
]

export const tableHeadReport: TableReportTypeProps = [
    {   id: 1,
        title:"#"
    },
    {   id: 2,
        title:"Efeito"
    },
    {   id: 3,
        title:"Data de Processamento"
    },
    {   id: 4,
        title:"Ficheiro"
    },
    {   id: 5,
        title:"Download"
    },
    {   id: 6,
        title:"Acção"
    }
]

export interface DeleteReportProps {
  reporteId: number;
}
export interface ReportPaymentTableProps {
    report: RelatorioProps[];
  }

export interface GroupAffiliatesTableProps {
    affiliates: AfliadosGroupProps[];
    getAfiliadosIdentificados : () => void
}
export interface AffiliatesTableProps {
    affiliates: Afiliado[];
    fetchAfiliados: () => void
}

export interface AffiliatesGroupTableProps {
    affiliates: AfiliatesIdentificadosPorps[];
    getAfliatesIdentificados: () => void
}

export interface HeaderProps {
onFilterChange: (filters: {
    referencia_do_servico: string, 
    data_do_processamento: string,
    montante_da_operacao: string,
    produto: string,
    data_movimento: string,
    periodo: string,
    numero_Log_EGR: string,
    tipo_de_Terminal: string,
    hora_do_movimento: string,
    localidade: string,
    data_limite: string,
}) => void;
 onRefresh: () => void; // Função para atualizar a tabela
}

export interface HeaderAccountPeriodProps {
    onFilterChange: (filters: string) => void;
     onRefresh: () => void; // Função para atualizar a tabela
}

export interface HeaderTableProps {
    onFilterChange: (filters: { 
        referencia_do_servico: string; 
        data_do_processamento: string;
        montante_da_operacao: string,
        data_movimento: string,
        periodo: string,
        numero_Log_EGR: string,
        tipo_de_Terminal: string,
        hora_do_movimento: string,
        produto: string,
        localidade: string
     }) => void;
    onRefresh: () => void; // Função para atualizar a tabela
}

export interface WebhookTableProps {
    webhooks: webHookDataType[];
    fetchWebhooks: () => void
}

export interface WebhookLogsTableProps {
    logs: webHookAPILog[];
    fetchWebhooks : () => void
}

export interface WebhookHeaderTableProps  {
    onFilterChange: (filters: string) => void;
    onRefresh: () => void; 
}

export interface WebhookHeaderLogTableProps  {
    onFilterChange: (filters: { 
        id_logreq: number,
        url: string,
        data_evento: string,
        desc_evento: string,
        resposta: string,
     }) => void;
    onRefresh: () => void; 
  
}
export interface HeaderAffiliates {
    onFilterChange: (filters: string) => void;
    onRefresh: () => void; // Função para atualizar a tabela
    fetchAfiliados: () => void
}

export interface GroupAffiliatesProps {
    onFilterChange: (filters: string) => void;
    onRefresh: () => void; // Função para atualizar a tabela
}

export interface HeaderAffiliatesGroup {
  onFilterChange: (filters: string) => void;
  onRefresh: () => void;
}

export interface PaymentsTableProps {
    payments: Payment[];
  }
export interface ProductTableProps {
  payments: AccountPeriodType[];
}

export type MarginRight= {
    m: string
}

export interface CloseDialog  {
    setClosed: (value: boolean) => void;
};

export interface RefreshButtonProps {
    onClick: () => void;
}

export interface TextSelect {
  text: string;
  width: string;
  onValueChange: (value: string) => void;
};

export interface CloseDialogGlobal  {
    title: string;
    message: string;
    setClosed: (value: boolean) => void;
};

export interface PaginationProps {
    page: number;
    pages: number;
    onPageChange: (page: number) => void;
}