// src/lib/abilityRules.js
// Mapeia o perfil do usuário Supabase para regras CASL do Vuexy

/**
 * Retorna as regras de habilidade CASL com base no role do usuário.
 * O role é lido de user.user_metadata.role (definido no Supabase).
 *
 * Roles disponíveis: 'admin' | 'client' (padrão: 'client')
 *
 * @param {object} user - Objeto user retornado pelo Supabase Auth
 * @returns {Array} Array de regras CASL
 */
export const getRulesFromUser = user => {
  const role = user?.user_metadata?.role ?? 'client'

  if (role === 'admin') {
    return [{ action: 'manage', subject: 'all' }]
  }

  // Role 'client' — acesso básico
  return [
    { action: 'read', subject: 'Auth' },
    { action: 'read', subject: 'AclDemo' },
  ]
}
