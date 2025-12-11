import { RouterContext } from 'koa-router';
import aiService from '../services/ai.service';
import { AdCreativeInput, AdStrategyInput } from '../types';

async function generateCreative(ctx: RouterContext): Promise<void> {
    const body = ctx.request.body as AdCreativeInput;

    if (!body.adDescription || typeof body.adDescription !== 'string') {
        ctx.status = 400;
        ctx.body = { error: true, message: '缺少必填参数: adDescription' };
        return;
    }

    if (!body.industry || typeof body.industry !== 'string') {
        ctx.status = 400;
        ctx.body = { error: true, message: '缺少必填参数: industry' };
        return;
    }

    const input: AdCreativeInput = {
        adDescription: body.adDescription.trim(),
        industry: body.industry.trim(),
        tone: body.tone || 'neutral'
    };

    const result = await aiService.generateAdCreative(input);

    if ('error' in result && result.error) {
        ctx.status = 500;
        ctx.body = result;
        return;
    }

    ctx.status = 200;
    ctx.body = result;
}

async function generateStrategy(ctx: RouterContext): Promise<void> {
    const body = ctx.request.body as AdStrategyInput;

    if (!body.adDescription || typeof body.adDescription !== 'string') {
        ctx.status = 400;
        ctx.body = { error: true, message: '缺少必填参数: adDescription' };
        return;
    }

    if (!body.industry || typeof body.industry !== 'string') {
        ctx.status = 400;
        ctx.body = { error: true, message: '缺少必填参数: industry' };
        return;
    }

    const input: AdStrategyInput = {
        adDescription: body.adDescription.trim(),
        industry: body.industry.trim()
    };

    const result = await aiService.generateAdStrategy(input);

    if ('error' in result && result.error) {
        ctx.status = 500;
        ctx.body = result;
        return;
    }

    ctx.status = 200;
    ctx.body = result;
}

export default {
    generateCreative,
    generateStrategy
};

