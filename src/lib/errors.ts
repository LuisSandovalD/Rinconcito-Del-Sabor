export class AppError extends Error {
  constructor(message: string, public readonly code: string, public readonly status: number, public readonly details?: unknown) {
    super(message);
    this.name = new.target.name;
  }
}
export class ValidationError extends AppError { constructor(message = "Datos inválidos", details?: unknown) { super(message, "VALIDATION_ERROR", 400, details); } }
export class AuthenticationError extends AppError { constructor(message = "No autenticado") { super(message, "AUTHENTICATION_ERROR", 401); } }
export class AuthorizationError extends AppError { constructor(message = "No autorizado") { super(message, "AUTHORIZATION_ERROR", 403); } }
export class NotFoundError extends AppError { constructor(message = "Recurso no encontrado") { super(message, "NOT_FOUND", 404); } }
export class ConflictError extends AppError { constructor(message = "Conflicto de datos") { super(message, "CONFLICT", 409); } }
export class RateLimitError extends AppError { constructor(message = "Demasiadas solicitudes") { super(message, "RATE_LIMIT", 429); } }
export class InfrastructureError extends AppError { constructor(message = "Error de infraestructura") { super(message, "INFRASTRUCTURE_ERROR", 500); } }
