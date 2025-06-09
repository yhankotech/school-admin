///Tipagens de acordo com os dados da API

// Define a interface para uma notificação
export type Notification = {
  id_notficacao_entidade: number;
  descricao_notificado: string;
  data_notificada: string;
  leitura: string
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
