///Tipagens de acordo com os dados da API
export type ReferencePayments = {
  id_referencia: number;
  entidade_cliente: string;
  criada_r: string; // ISO date
  num_referencia: string;
  data_limite_pagamento: string; // ISO date (yyyy-mm-dd)
  hora_limite_pagamento: string;
  indicador_de_produtos: string;
  tipo_de_registro: string;
  referencia_do_montante: string;
  codigo_de_processamento: string;
  textos_para_talao: string;
  quantidade_de_unidades: string;
  codigo_de_ativacao: string;
  numero_serie_helpDesk: string;
  chave_ativacao: string;
  data_de_validade: string;
  montante_maximo: string;
  data_inicio_de_pagamento: string;
  montante_minimo: string;
  montante_limitado_para_pagamento_longo: string;
  montante_limitado_para_pagamento_longo_pago: string;
  montante_fixo: string;
  aceitar_fixo: string;
  codigo_de_cliente: string;
  numero_de_linhas: string;
  actualiza_em: string; // ISO date
  indicador_produto_id: string;
  estado_atm: string;
  ficheiro_fsec_processado: string;
  ficheiro_fref_processado: string;
  usabilidade: string;
  tipo_referencia_pagamento: string;
  opcional_1: string;
  opcional_2: string;
  opcional_3: string;
  nib: string;
  campo_codigo_cliente_primavera: string;
  gerado_por_afiliado: number;
  id_tipo_produto: number;
  registo_produto: string;
  entidade_tipo: string;
  id_produto: number;
  cliente_tipo_produto: number;
  criado_quando: string; // ISO date
  produto: string;
  codigo_do_produto: number;
  montantes_fixo: string;
};


export type TableTypeProps = {
    id: number;
    title: string
}[]

export type TableReportTypeProps = {
    id: number;
    title: string
}[]

export type RelatorioProps = {
  id_relatorio: number;
  para: string;
  gerado_quando: string;
  file_gerado: string;
  entidade: string;
  id_clientes: number;
  nome_empresa: string;
  nif: string;
  contacto: string;
  email: string;
  senha: string;
  criando_em: string;
  logo: string;
  numero_entidade: string;
  entidade_master: string;
  configurado_sector: string;
  comunicacao: string;
  num_padrao_referencias: string;
  preenchimento_refs_zeros_a_esquerda: string;
  tipo_produto: number;
  responsavel: string;
  ultimo_ficheiro_enviado_a_emis: string;
  actualizado_em: string; 
  data_de_inicio_de_contrato: string | null;
  data_de_fim_de_contrato: string | null;
  arquivo_do_contrato: string;
  bloqueio: string;
  novo_cliente: string;
  parametrizado_como: string;
  validacao_referencias: string;
  ultimo_login: string; // ou Date
  endereco_mac_unico: string;
  criado_por: number;
  montante_maximo_pagamento: string;
  montante_minimo_pagamento: string;
  versao_mensagem_PRT: string;
  caraterizacao_cliente: string;
  percentagem_de_uso: number;
  gpo_numero_comerciante: string;
  gpo_numero_cartao: string | null;
  gpo_numero_banco: string | null;
  gpo_numero_POS: string | null;
  gpo_numero_establecimento: string | null;
  gpo_comerciante_hash: string | null;
};


export type ResumoMensal = {
  mensal: string;
  quantidade: number;
  montante: number;
}

// Define a interface para uma notificação
export type Notification = {
  id_notficacao_entidade: number;
  descricao_notificado: string;
  data_notificada: string;
  leitura: string
}

export type UltimoPeriodo = {
  id: number,
  Identificacao_Log_EGR: string,
  data_periodo: string,
  somatorio: number,
  quantidade: number
}

export type UltimoPagamento = {
  id_pagamento: number,
  montante_da_operacao: string,// montante
  Identificacao_Log_EGR: string, // transação
  numero_Log_EGR: string,
  data_movimento: string, 
  hora_do_movimento: string, //Data do movimento
  referencia_do_servico: string,//referencia
  tipo_de_Terminal: string,//terminal
}

export type UserDataType = {
  id: number,
  email: string,
  contacto: string,
  cadastrado_em: string,
  ultimo_login: string,
  nome_empresa: string,
  logo: string,
  nif: string,
  arquivo_do_contrato: string
}

export type UserAfiliadoTypes = {
    id_afiliado: number;
    nome_afiliado: string;
    email_afiliado: string;
    user_name: string;
    gerado_em_: string;
    actualizado_em_: string;
    ultimo_login_afiliado: string;
    nome_empresa: string;
    nome_identificacao: string;
}

export type Payment = {
  id_pagamento: number;
  referencia_do_servico: number;
  montante_da_operacao: string;
  data_do_processamento: string;
  produto: string;
  localidade: string;
  data_movimento: string,
  periodo: string,
  numero_Log_EGR: string,
  tipo_de_Terminal: string,
  hora_do_movimento: string,
  data_limite: string,
  tarifa_aplicada_a_operacao: string,
  codigo_de_Moeda: string,
  data_hora_transacao_cliente: string,
  modo_de_Envio_Comunicacao:string
  Identificacao_Log_EGR:string
  numero_Periodo_Contabilistico:string
  identificacao_Transacao_Local:string,
  data_limite_pagamento: string,
  pagamento_MFT: string //comprovante,
  notificacao_PRT: string//notificação
}
export type Paymentos = {
  id_pagamento: string;
  referencia_do_servico: number;
  montante_da_operacao: string;
  data_do_processamento: string;
  produto: string;
  localidade: string;
  notification: string;
  Comprovant: string; 
  data_movimento: string,
  periodo: string,
  numero_Log_EGR: string,
  tipo_de_Terminal: string,
  hora_do_movimento: string,
  data_limite: string
}

export type PaymentProps = {
  referencia: number;
  tarifa_aplicada: string
  montante: string
  produto: string
  moeda: string
  transacao: string
  comunicacao: string
  terminal: string
  numero_log: string
  identificaca_log: string
  hora_movimento: string
  data_movimento: string
  periodo_contabilistico: string
  identificacao_transacional: string,
  data_limite_pagamento: string
}

export type AccountPeriodType = {
  Identificacao_Log_EGR: string,
  somatorio: number,
  quantidade: number,
  data_periodo: string
  numero_log: string
  participantes: number
}

export type ReferenceAccountPeriodProp = {
    reference: string,
    id_log: string,
    montante: number,
    quantidade: number,
    data_periodo: string
    participantes: number,
    somatorio: number
}

export type webHookDataType = {
  id_endpoint: number,
  url: string,
  desc_evento: string
  evento: number,
  criacao_em: string,
  verificar_ssl: boolean,
  activo: boolean,
  tipo_endpoint: string,
  tipo_resposta: string,
}

export type webHookAPIType = {
  id_endpoint: number,
  nome_afiliado: string,
  url: string,
  desc_evento: string,
  activo: boolean,
  criacao_em: string,
  verificar_ssl: boolean
}

export type webHookAPILog = {
  id_logreq: number,
  url: string,
  data_evento: string,
  desc_evento: string,
  resposta: string,
  requesicao: string, 
  statusCode: string
}

export type UpdateWebHookDataType = {
  id_endpoint: number,
  url: string,
  desc_evento: string,
  criacao_em: string,
  verificar_ssl: boolean,
  activo: boolean,
  tipo_resposta: string,
  tipo_endpoint: string
}

export type WebhooksPorps = {
  id_endpoint: number,
  url: string,
  desc_evento: string,
  evento:number
  criacao_em: string,
  verificar_ssl: boolean,
  activo: boolean,
  tipo_resposta: string,
  tipo_endpoint: string,
  fetchWebhooks:() => void
}

export type WebhookFails = {
  id_logreq: number, 
  enviado: string, 
  statusCode: string,
  timestamp_log: string,
  proximoRetryEmSegundo: string,
  tempoPercorrido: string,
  data_evento: string,
  tentativas: number,
  resposta: string,
  requesicao: string,
  url: string
}

export type WebhookFailsRetry = {
  id_logs_tentativa: number,
  status_tentativa: string,
  tempo_tentado: string,
  status_http: string,
  status_text_http: string,
  response_http_body: string
}

export type RemetenteType = {
  id_envio_rementente: number;
  id_api_rementente: string;
  nome_rementente: string;
  estado_remetente: string;
  criado_remetente: string; 
  campo_envio: string;
  entidade_remetente: string;
};

export type RemetenteSms = {
  id_envio: number;
  tipo_envio: string;
  id_envio_rementente_entidade: number;
  mensagem_envio: string;
  custo_envio: number;
  hora_envio: string; 
  id_envio_rementente: number;
  id_api_rementente: string;
  nome_rementente: string;
  estado_remetente: string;
  criado_remetente: string;
  campo_envio: string; 
  entidade_remetente: string;
};

export type Afiliado = {
  id_afiliado: number;
  activacao: boolean;
  nome_afiliado: string;
  email_afiliado: string;
  user_name: string;
  gerado_em_:string;
  actualizado_em_: string;
  nome_empresa: string;
  numero_entidade: string;
  entidade_tipo: string;
  nome_identificacao: string;
};

export type IdentificadoProps ={
  id_identificacao_afiliados: string,
  nome_identificacao: string,
}

export type PermitionsProps = {
  afiliado: number,
  permissoes_afiliados: number,
  pagina_referencia: string;
  pagina_pagamento: string,
  pagina_contabilistico: string,
  pagina_relatorio: string,
  pagina_pagamentos_online: string,
  pagina_relatorios_online:string,
  pagina_servico_api: string,
  pagina_faq: string,
  pagina_afiliado: string,
  pagina_sms: string,
  pagina_token: string,
  pagina_webwook: string,
  pagina_notificacao: string,
  pagina_perfil: string,
  pagina_sair: string,
}

export type AfliadosGroupProps = {
  nome_empresa: string,
  numero_entidade: string,
  entidade_tipo: string,
  id_identificacao_afiliados: number,
  nome_identificacao: string,
  gerado_ident_em: string
}

export type AfiliatesIdentificadosPorps = {
  id_afiliado: number,
  activacao: string,
  nome_afiliado: string,
  email_afiliado: string,
  user_name: string,
  gerado_em_: string,
  actualizado_em_: string,
  nome_empresa: string,
  numero_entidade: string,
  entidade_tipo: string,
  nome_identificacao: string
}

export type PaymentTprops = {
  data_do_processamento: string; 
  referencia_do_servico: string;
  montante_da_operacao: string,
  data_movimento: string,
  periodo: string,
  numero_Log_EGR: string,
  tipo_de_Terminal: string,
  hora_do_movimento: string,
  produto: string,
  localidade: string
  data_limite:string
}

export type EventosWebhookProps = {
  id_evento: number;
  desc_evento: string
};