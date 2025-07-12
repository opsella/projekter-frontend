import {inject, Injectable} from '@angular/core';
import {MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private messageService: MessageService = inject(MessageService);

  public info(title: string, message: string, ttl?: number) {
    this.messageService.add({
      severity: "info",
      summary: title,
      detail: message,
      life: ttl ?? 3000
    });
  }

  public warn(title: string, message: string, ttl?: number) {
    this.messageService.add({
      severity: "warn",
      summary: title,
      detail: message,
      life: ttl ?? 3000
    });
  }

  public error(title: string, message: string, ttl?: number) {
    this.messageService.add({
      severity: "error",
      summary: title,
      detail: message,
      life: ttl ?? 5000
    });
  }
}
